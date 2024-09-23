import express from 'express';
import cors from 'cors';
import { Post } from './types';

const app = express();
app.use(express.json());
app.use(cors());

const posts: Record<PropertyKey, Post> = {};

app.get('/posts', (req, res) => {
  res.send(posts);
});

app.post('/events', (req, res) => {
  const { type, data } = req.body;

  if (type === 'PostCreated') {
    const { id, title } = data;
    posts[id] = { id, title, comments: [] };
  }

  if (type === 'CommentCreated') {
    const { id, content, postId } = data;
    const post = posts[postId];
    post.comments.push({ id, content });
  }

  console.log(JSON.stringify({ posts }, null, 2));

  res.send({});
});

app.listen(4002, () => {
  console.log('Listening on 4002');
});
