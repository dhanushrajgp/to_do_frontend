import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { APISTATUS } from "../../../utilities/helper.ts";
import { createTodoAPI, deleteTodoAPI, fetchToDosApi, updateTodoAPI } from "../../../api/todo";


const initialState = {
  todos: [],
  todo: {},
  todosLength: 0,
  status: APISTATUS.IDLE,
  error: null,
};

export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  const response = await fetchToDosApi();
  return response?.data;
});



export const fetchTodo = createAsyncThunk(
  "todos/fetchTodo",
  async ({ id }) => {
    const response = await fetchTodo(id);
    if (!response) {
      initialState.status = APISTATUS.ERROR;
    }
    return response?.data;
  }
);

export const deleteTodo = createAsyncThunk(
  "todos/deleteTodo",
  async ({ body }) => {
    const response = await deleteTodoAPI(body);
    return response?.data;
  }
);


export const addNewTodo = createAsyncThunk(
  "todos/addNewTodo",
  async ({title}) => {
    const response = await createTodoAPI(title)
    return response?.data;
  }
);

export const updateTodo = createAsyncThunk(
  "todos/updateTodo",
  async (body) => {
    const response = await updateTodoAPI(body)
    return response?.data;
  }
);



export const formsSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    todoAdded: (state, action) => {
      state.todos.push(action.payload);
    },
    todoDeleted: (state, action) => {
      state.todos = state.todos.filter(
        (item) => item.title !== action.payload.title
      );
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchTodos.pending, (state, action) => {
        state.status = APISTATUS.PENDING;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.status = APISTATUS.ERROR;
        state.error = action.error.message;
      }) 
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.status = APISTATUS.SUCCESS;
        if(AxiosError){
          state.status = APISTATUS.ERROR
        }
        state.todos = action.payload;
      })
      .addCase(addNewTodo.fulfilled, (state, action) => {
        if(AxiosError){
          state.status = APISTATUS.ERROR
        }
        state.todos.push(action.payload);
        state.todosLength = state.todos.length;
      })
      .addCase(fetchTodo.fulfilled, (state, action) => {
        if(AxiosError){
          state.status = APISTATUS.ERROR
        }
        state.todo = action.payload;
        localStorage.setItem("todo", JSON.stringify(action.payload));
      })
      .addCase(updateTodo.fulfilled, (state, action) => {
        if(AxiosError){
          state.status = APISTATUS.ERROR
        }
        state.todo = action.payload;
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        if(AxiosError){
          state.status = APISTATUS.ERROR
        }
        state.todos = state.forms.filter(
          (item) => item.title !== action.payload.title
        );
      });
  },
});

export const { todoAdded, todoDeleted } = formsSlice.actions;
export const getTodos = (state) => state.todos.todos;
export const getNetworkStatus = (state) => state.todos.status;
export const getTodosError = (state) => state.todos.error;
export const getTodo = (state) => state.todos.todo;
export const getDeleteStatus = (state) => state.todos.deleteStatus;

export default formsSlice.reducer;
