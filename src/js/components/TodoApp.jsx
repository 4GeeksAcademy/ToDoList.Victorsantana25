import React, { useState } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import '../../styles/index.css'

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskText) => {
    if (taskText.trim() !== '') {
      setTasks([...tasks, { text: taskText, completed: false }]);
    }
  };

  const deleteTask = (indexToRemove) => {
    setTasks(tasks.filter((_, index) => index !== indexToRemove));
  };

  const toggleTask = (index) => {
    const updated = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    updated.sort((a, b) => a.completed - b.completed);
    setTasks(updated);
  };

  return (
    <div className="container todo-app-container">
      <h2 className="todo-app-title">Lista de Tareas</h2>
      <TodoInput addTask={addTask} />
      <TodoList tasks={tasks} deleteTask={deleteTask} toggleTask={toggleTask} />
      {tasks.length === 0 && <div className="text-muted mt-3">No hay tareas, añadir tareas</div>}
    </div>
  );
};

export default TodoApp;
