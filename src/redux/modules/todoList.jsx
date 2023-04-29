// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { toggleTodo, deleteTodo } from "./todosSlice";

// const TodoList = () => {
//   const todos = useSelector((state) => state.todos);
//   const dispatch = useDispatch();

//   const handleToggleTodo = (id) => {
//     dispatch(toggleTodo(id));
//   };

//   const handleDeleteTodo = (id) => {
//     dispatch(deleteTodo(id));
//   };

//   return (
//     <ul>
//       {todos.map((todo) => (
//         <li key={todo.id}>
//           <span
//             style={{ textDecoration: todo.completed ? "line-through" : "none" }}
//             onClick={() => handleToggleTodo(todo.id)}
//           >
//             {todo.text}
//           </span>
//           <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default TodoList;
