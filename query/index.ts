import express from 'express';
import cors from 'cors';
import axios from 'axios'
import { Post, Event, ModerationStatus } from './types';

const app = express();
app.use(express.json());
app.use(cors());

const posts: Record<PropertyKey, Post> = {};

const handleEvent = (type: string, data: Event['data']) => {
  if (type === 'PostCreated') {
    const { id, title } = data;
    if (title) posts[id] = { id, title, comments: [] };
  }

  if (type === 'CommentCreated') {
    const { id, content, postId, status } = data;
    const hasCommentContent = content && postId && status;
    if (hasCommentContent) {
      const post = posts[postId];
      post.comments.push({ id, content, status });
    }
  }

  if (type === 'CommentUpdated') {
    const { id, content, postId, status } = data;

    const post = posts[postId as string];
    const comment = post.comments.find((comment) => comment.id === id)!;

    comment.status = status as ModerationStatus;
    comment.content = content as string;
  }
};

app.get('/posts', (req, res) => {
  res.send(Object.values(posts));
});

app.post('/events', (req, res) => {
  const { type, data } = req.body;

  handleEvent(type, data);

  console.log(JSON.stringify({ posts }, null, 2));

  res.send({});
});

app.listen(4002, async () => {
  console.log('Listening on 4002');
  try {
    const res = await axios.get("http://localhost:4005/events");
 
    for (let event of res.data) {
      console.log("Processing event:", event.type);
 
      handleEvent(event.type, event.data);
    }
  } catch (error) {
    console.log(error);
  }
});
