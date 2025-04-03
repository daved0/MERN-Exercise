import React from 'react';

const Task = ({ todo, onToggleCompleted, onDeleteTodo }) => {
  return (
    <>
      <span 
        className={`fw-bold ${todo.completed ? 'text-decoration-line-through text-muted' : ''}`}
        onClick={() => onToggleCompleted(todo._id)}
        style={{ cursor: 'pointer' }}
      >
        {todo.text}
      </span>

      <button className="btn btn-danger btn-sm" onClick={() => onDeleteTodo(todo._id)}>Delete</button>
    </>
  );
};

export default Task;
