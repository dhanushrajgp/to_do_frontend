import { configureStore } from '@reduxjs/toolkit'
import todosReducer from "./features/todo/todoSlice";
import authReducer from "./features/auth/authSlice";

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    auth:authReducer
  },
})

