import express from 'express';
import { randomBytes } from 'crypto';
import cors from 'cors';
import axios from 'axios';

const app = express();
app.use(express.json());
app.use(cors());

interface Comment {
  id: string;
  content: string;
  status: 'pending' | 'approved' | 'rejected'
}

const commentsByPostId: Record<PropertyKey, Comment[]> = {};

app.get('/posts/:id/comments', (req, res) => {
  res.send(commentsByPostId[req.params.id] || []);
});

app.post('/posts/:id/comments', async (req, res) => {
  const commentId = randomBytes(4).toString('hex');
  const { content } = req.body;

  const comments = commentsByPostId[req.params.id] || [];

  comments.push({ id: commentId, content, status: 'pending' });

  commentsByPostId[req.params.id] = comments;

  await axios
    .post('http://localhost:4005/events', {
      type: 'CommentCreated',
      data: {
        id: commentId,
        content,
        status: 'pending',
        postId: req.params.id,
      },
    })
    .catch((error) => console.log(error));

  res.status(201).send(comments);
});

app.post('/events', (req, res) => {
  console.log({ RecievedEvent: req.body.type });

  res.send({});
});

app.listen(4001, () => {
  console.log('Listening on 4001');
});
