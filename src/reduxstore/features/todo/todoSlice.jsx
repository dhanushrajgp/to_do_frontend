import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { APISTATUS } from "../../../utilities/helper.ts";
import { createTodoAPI, deleteTodoAPI, fetchToDosApi, updateTodoAPI } from "../../../api/todo";
import checkStatus from "../../common.js";


const initialState = {
  todos: [],
  todo: {},
  todosLength: 0,
  status: APISTATUS.IDLE,
  error: null,
  errormessage:""
};

export const fetchTodos = createAsyncThunk("todos/fetchTodos", async (token) => {
  const response = await fetchToDosApi(token);
  return response;
});



export const fetchTodo = createAsyncThunk(
  "todos/fetchTodo",
  async ({ id }) => {
    const response = await fetchTodo(id);
    if (!response) {
      initialState.status = APISTATUS.ERROR;
    }
    return response;
  }
);

export const deleteTodo = createAsyncThunk(
  "todos/deleteTodo",
  async (body ) => {
    const response = await deleteTodoAPI(body);
    return response;
  }
);


export const addNewTodo = createAsyncThunk(
  "todos/addNewTodo",
  async ({title}) => {
    const response = await createTodoAPI(title)
    return response;
  }
);

export const updateTodo = createAsyncThunk(
  "todos/updateTodo",
  async (body) => {
    const response = await updateTodoAPI(body)
    return response;
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
        if(action.payload.name === "AxiosError"){
          checkStatus(action,state);
        }else{
        state.todos = action.payload.data;
        state.status = APISTATUS.SUCCESS;
        }})
      .addCase(addNewTodo.fulfilled, (state, action) => {
        if(action.payload.name === "AxiosError"){
          checkStatus(action,state);}
          else{
            state.status = APISTATUS.SUCCESS;
            state.todos.push(action.payload.data);
            state.todosLength = state.todos.length;
          }
      })
      .addCase(fetchTodo.fulfilled, (state, action) => {
        if(action.payload.name === "AxiosError"){
          checkStatus(action,state);}
          else{
            state.status = APISTATUS.SUCCESS;
            state.todo = action.payload;
            localStorage.setItem("todo", JSON.stringify(action.payload.data));
          }

      })
      .addCase(updateTodo.fulfilled, (state, action) => {
        if(action.payload.name === "AxiosError"){
          checkStatus(action,state);}
          else{
            state.status = APISTATUS.SUCCESS;
            state.todos = action.payload.data;
          }
        
      })
      .addCase(deleteTodo.rejected, (state, action) => {
        checkStatus(action,state);
        state.error = action.error.message;
      }) 
      .addCase(deleteTodo.fulfilled, (state, action) => {
        if(action.payload.name === "AxiosError"){
          checkStatus(action,state);}
          else{
            state.status = APISTATUS.SUCCESS;
            state.todos = action.payload.data;
          }
      });

  },
});

export const { todoAdded, todoDeleted } = formsSlice.actions;
export const getTodos = (state) => state.todos.todos;
export const getNetworkStatus = (state) => state.todos.status;
export const getTodosError = (state) => state.todos.error;
export const getTodo = (state) => state.todos.todo;
export const getDeleteStatus = (state) => state.todos.deleteStatus;
export const getErrorMessage = (state) => state.todos.error;

export default formsSlice.reducer;
