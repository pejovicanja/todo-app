// import React from 'react';

// function Todo({ todo, index, completeTodo, removeTodo }) {
//   return (
//     <div 
//       className="todo"
//       style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }}
//     >
//       {todo.text}
//       <div>
//         <button onClick={() => completeTodo(index)}>
//           {todo.isCompleted ? 'Undo' : 'Complete'}
//         </button>
//         <button onClick={() => removeTodo(index)}>x</button>
//       </div>
//     </div>
//   );
// }

// export default Todo;


import React from 'react';
import styled from 'styled-components';

const TodoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ddd;
  background: ${props => (props.isCompleted ? '#d3ffd3' : 'white')};
  text-decoration: ${props => (props.isCompleted ? 'line-through' : 'none')};
`;

const TodoButton = styled.button`
  margin-left: 10px;
  background: #ff5252;
  border: none;
  color: white;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: #ff0000;
  }
`;

function Todo({ todo, index, completeTodo, removeTodo }) {
  return (
    <TodoContainer isCompleted={todo.isCompleted}>
      {todo.text}
      <div>
        <TodoButton onClick={() => completeTodo(index)}>
          {todo.isCompleted ? 'Undo' : 'Complete'}
        </TodoButton>
        <TodoButton onClick={() => removeTodo(index)}>x</TodoButton>
      </div>
    </TodoContainer>
  );
}

export default Todo;
