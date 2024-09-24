import express from 'express';
import axios from 'axios';

const app = express();
app.use(express.json());

app.post('/events', (req, res) => {
  const event = req.body;

  console.log(JSON.stringify({ event }, null, 2));

  axios
    .post('http://localhost:4000/events', event)
    .catch((error) => console.error(error));
  axios
    .post('http://localhost:4001/events', event)
    .catch((error) => console.error(error));
  axios
    .post('http://localhost:4002/events', event)
    .catch((error) => console.error(error));
  axios
    .post('http://localhost:4003/events', event)
    .catch((error) => console.error(error));

  res.send({ status: 'OK' });
});

app.listen(4005, () => {
  console.log('Listening on 4005');
});
