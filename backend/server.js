const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const filePath = '/usr/src/app/todos.json'; // path to volume

// Helper functions to read and write to JSON file
const readTodos = () => {
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading file:', error);
    return [];
  }
};

const writeTodos = (todos) => {
  try {
    fs.writeFileSync(filePath, JSON.stringify(todos, null, 2), 'utf8');
  } catch (error) {
    console.error('Error writing file:', error);
  }
};

// GET todos
app.get('/api/todos', (req, res) => {
  const todos = readTodos();
  res.json(todos);
});

// POST new todo
app.post('/api/todos', (req, res) => {
  const { todos } = req.body;
  writeTodos(todos);
  res.status(201).json({ message: 'Todos saved successfully' });
});

// DELETE todo
app.delete('/api/todos/:index', (req, res) => {
  const index = parseInt(req.params.index, 10);
  let todos = readTodos();
  if (index >= 0 && index < todos.length) {
    todos.splice(index, 1);
    writeTodos(todos);
    res.status(200).json({ message: 'Todo deleted successfully' });
  } else {
    res.status(400).json({ message: 'Invalid index' });
  }
});

// PATCH/PUT to update completion status
app.patch('/api/todos/:index', (req, res) => {
  const index = parseInt(req.params.index, 10);
  let todos = readTodos();
  if (index >= 0 && index < todos.length) {
    todos[index].isCompleted = !todos[index].isCompleted;
    writeTodos(todos);
    res.status(200).json({ message: 'Todo updated successfully' });
  } else {
    res.status(400).json({ message: 'Invalid index' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});