import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateTodo, deleteTodo } from "../actions/todoActions";
import Todo from "./Todo";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleUpdate = (id) => {
    const todo = todos.find((todo) => todo.id === id);
    dispatch(
      updateTodo({
        ...todo,
        completed: !todo.completed,
      })
    );
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };
  return (
    <div>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          onUpdate={handleUpdate}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default TodoList;
