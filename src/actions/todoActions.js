import { createAction } from "@reduxjs/toolkit";

export const addTodo = createAction("ADD_TODO");
export const updateTodo = createAction("UPDATE_TODO");
export const deleteTodo = createAction("DELETE_TODO");
