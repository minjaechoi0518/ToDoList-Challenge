import { createReducer } from "@reduxjs/toolkit";
import { addTodo, updateTodo, deleteTodo } from "../actions/todoActions";

const initialState = [];

const todosReducer = createReducer(initialState, {
  [addTodo]: (state, action) => {
    state.push(action.payload);
  },
  [updateTodo]: (state, action) => {
    const todo = state.find((todo) => todo.id === action.payload.id);
    if (todo) {
      todo.text = action.payload.text;
      todo.completed = action.payload.completed;
    }
  },
  [deleteTodo]: (state, action) => {
    return state.filter((todo) => todo.id !== action.payload);
  },
});

export default todosReducer;
