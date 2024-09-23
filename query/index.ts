import express from 'express';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

app.get('/posts', (req, res) => {});

app.post('/events', (req, res) => {});

app.listen(4002, () => {
  console.log('Listening on 4002');
});
