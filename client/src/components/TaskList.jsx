import React from 'react';
import Task from './Task';

const TaskList = ({ todos, onToggleCompleted, onDeleteTodo }) => {
  return (
    <div className="task-list mt-3">
      {todos.map((todo) => (
        <div key={todo._id} className="card mb-2 shadow-sm">
          <div className="card-body d-flex justify-content-between align-items-center">
            <Task todo={todo} onToggleCompleted={onToggleCompleted} onDeleteTodo={onDeleteTodo} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
