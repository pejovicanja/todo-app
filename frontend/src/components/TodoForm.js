// import React, { useState } from 'react';

// function TodoForm({ addTodo }) {
//   const [value, setValue] = useState('');

//   const handleSubmit = e => {
//     e.preventDefault();
//     if (!value) return;
//     addTodo(value);
//     setValue('');
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         className="input"
//         value={value}
//         onChange={e => setValue(e.target.value)}
//       />
//     </form>
//   );
// }

// export default TodoForm;

import React, { useState } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const Input = styled.input`
  width: 80%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  outline: none;
`;

const Button = styled.button`
  width: 18%;
  background: #4caf50;
  border: none;
  color: white;
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: #45a049;
  }
`;

function TodoForm({ addTodo }) {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <Button type="submit">Add</Button>
    </Form>
  );
}

export default TodoForm;
