import express from 'express';
import { randomBytes } from 'crypto';
import cors from 'cors';
import axios from 'axios';

const app = express();
app.use(express.json());
app.use(cors());

interface Post {
  id: string;
  title: string;
}

const posts: Record<PropertyKey, Post> = {};

app.get('/posts', (req, res) => {
  res.send(Object.values(posts));
});

app.post('/posts', async (req, res) => {
  const id = randomBytes(4).toString('hex');
  const { title } = req.body;

  posts[id] = {
    id,
    title,
  };

  await axios
    .post('http://event-bus-srv:4005/events', {
      type: 'PostCreated',
      data: {
        id,
        title,
      },
    })
    .catch((error) => console.error(error));

  res.status(201).send(posts[id]);
});

app.post('/events', (req, res) => {
  console.log({ RecievedEvent: req.body.type });

  res.send({});
});

app.listen(4000, () => {
  console.log('v55');
  console.log('Listening on 4000');
});
