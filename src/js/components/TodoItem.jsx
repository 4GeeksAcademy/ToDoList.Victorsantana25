import React, { useState } from 'react';
import '../../styles/index.css'

const TodoItem = ({ task, index, deleteTask, toggleTask }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <li
      className={`list-group-item todo-item ${task.completed ? 'todo-completed' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="d-flex align-items-center">
        <input
          type="checkbox"
          className="form-check-input rounded-circle form-check-input-success todo-checkbox"
          checked={task.completed}
          onChange={() => toggleTask(index)}
        />
        <span className="todo-text">{task.text}</span>
      </div>
      {hovered && (
        <i
          className="bi bi-trash todo-delete"
          onClick={() => deleteTask(index)}
        ></i>
      )}
    </li>
  );
};

export default TodoItem;
