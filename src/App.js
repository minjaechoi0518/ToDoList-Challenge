//완
import React from "react";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";

const App = () => {
  return (
    <div>
      <h1>ToDo List</h1>
      <AddTodo />
      <TodoList />
    </div>
  );
};
export default App;
