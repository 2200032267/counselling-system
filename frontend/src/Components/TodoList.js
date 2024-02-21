import React, { useState } from 'react';

const TodoList = ({ todos }) => {
  const [todoList, setTodoList] = useState(todos);

  const handleToggleComplete = (index) => {
    const updatedTodoList = [...todoList];
    updatedTodoList[index].completed = !updatedTodoList[index].completed;
    setTodoList(updatedTodoList);
  };

  const tableStyle = {
    width: '50%',
    margin: 'auto',
    fontFamily: 'Arial, sans-serif',
    borderCollapse: 'collapse',
    marginTop: '20px',
  };

  const thStyle = {
    backgroundColor: '#5F9EA0',
    padding: '12px',
    textAlign: 'left',
    borderBottom: '1px solid #ddd',
  };

  const tdStyle = {
    padding: '12px',
    textAlign: 'left',
    borderBottom: '1px solid #ddd',
  };

  const checkboxStyle = {
    marginRight: '8px',
  };

  return (
    <div>
      <h2>Todo List</h2>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Status</th>
            <th style={thStyle}>Task</th>
          </tr>
        </thead>
        <tbody>
          {todoList.map((todo, index) => (
            <tr key={index}>
              <td style={tdStyle}>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => handleToggleComplete(index)}
                  style={checkboxStyle}
                />
                {todo.completed ? 'Completed' : 'Incomplete'}
              </td>
              <td style={{ ...tdStyle, textDecoration: todo.completed ? 'line-through' : 'none' }}>
                {todo.title}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;
