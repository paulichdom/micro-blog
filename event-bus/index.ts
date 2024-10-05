import express from 'express';
import axios from 'axios';

const app = express();
app.use(express.json());

export type EventType =
  | 'PostCreated'
  | 'CommentCreated'
  | 'CommentModerated'
  | 'CommentUpdated';

export interface Event {
  type: EventType;
  data: {
    id: string;
    title?: string;
    content?: string;
    status?: string;
    postId?: string;
  };
}

const events: Event[] = [];

app.post('/events', (req, res) => {
  const event = req.body;

  events.push(event);

  console.log(JSON.stringify({ event }, null, 2));

  axios
    .post('http://posts-clusterip-srv:4000/events', event)
    .catch((error) => console.error(error));
  /* axios
    .post('http://localhost:4001/events', event)
    .catch((error) => console.error(error));
  axios
    .post('http://localhost:4002/events', event)
    .catch((error) => console.error(error));
  axios
    .post('http://localhost:4003/events', event)
    .catch((error) => console.error(error)); */

  res.send({ status: 'OK' });
});

app.get('/events', (req, res) => {
  res.send(events);
});

app.listen(4005, () => {
  console.log('Listening on 4005');
});
