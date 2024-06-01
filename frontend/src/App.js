import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';

const AppContainer = styled.div`
  background: #f0f0f0;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TodoList = styled.div`
  background: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 300px;
`;

function App() {
  const [todos, setTodos] = useState([]);
  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(`${apiUrl}/api/todos`);
      const data = await response.json();
      setTodos(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const addTodo = async text => {
    const newTodos = [...todos, { text, isCompleted: false }];
    setTodos(newTodos);
    try {
      await fetch(`${apiUrl}/api/todos`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ todos: newTodos }),
      });
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };

  const completeTodo = async index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
    try {
      await fetch(`${apiUrl}/api/todos/${index}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } catch (error) {
      console.error('Error updating todo:', error);
    }
  };

  const removeTodo = async index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
    try {
      await fetch(`${apiUrl}/api/todos/${index}`, {
        method: 'DELETE',
      });
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  return (
    <AppContainer>
      <TodoList>
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </TodoList>
    </AppContainer>
  );
}

export default App;
