const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

let tasks = [
  { id: 1, title: "Deploy to EC2", done: true },
  { id: 2, title: "Set up GitHub Actions", done: false }
];

app.get('/', (req, res) => {
  res.send('Travifai DevOps Assignment ✅ Task API v2 is live and running!');
});

app.get('/tasks', (req, res) => {
  res.json(tasks);
});

app.post('/tasks', (req, res) => {
  const { title } = req.body;
  if (!title) return res.status(400).json({ error: "Title is required" });

  const newTask = { id: tasks.length + 1, title, done: false };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Task API listening on port ${port}`));

