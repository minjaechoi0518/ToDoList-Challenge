import React from "react";

const Todo = ({ todo, onUpdate, onDelete }) => {
  const handleUpdate = () => {
    onUpdate(todo.id);
  };

  const handleDelete = () => {
    onDelete(todo.id);
  };

  return (
    <div>
      <input type="checkbox" checked={todo.completed} onChange={handleUpdate} />
      <span>{todo.text}</span>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Todo;
