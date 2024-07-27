
import { BASEURL } from "../utilities/helper.ts";
import api from "./api";

const URLS = {
  fetchTodos: "item",
};

const token = localStorage.getItem("token");

export const fetchToDosApi = async(token) => {
  return api.get(`${URLS.fetchTodos}/get`, {
    baseUrl: BASEURL,
    headers:{
      "token":token
    }
  })
};

export const fetchTodoAPI = (id) => {
  return api.get(`${URLS.fetchTodos}/${id}`, {
    baseUrl: BASEURL,
    headers:{
      "token":token
    }
  });
};

export const createTodoAPI = (title,body={})=>{
    return api.post(`${URLS.fetchTodos}/create/${title}`,body,{
        baseUrl:BASEURL,
        headers:{
          "token":token
        }
    })
}

export const updateTodoAPI = (body={})=>{
    return api.post(`${URLS.fetchTodos}/edit`,body,{
        baseUrl:BASEURL,
        headers:{
          "token":token
        }
    })
}

export const deleteTodoAPI = async(body={})=>{
  const response = await api.post(`${URLS.fetchTodos}/delete`, body, {
    baseURL: BASEURL,
    headers: {
      "token": token,
    },
  });
  return {
    data: response.data,
    status: response.status,
    statusText: response.statusText,
    headers: { ...response.headers }, 
  };
};
