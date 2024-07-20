
import { BASEURL } from "../utilities/helper.ts";
import api from "./api";

const URLS = {
  fetchTodos: "item",
};

export const fetchToDosApi = async() => {
  return api.get(`${URLS.fetchTodos}/get`, {
    baseUrl: BASEURL,
    headers:{
      "token":"some token"
    }
  })
};

export const fetchTodoAPI = (id) => {
  return api.get(`${URLS.fetchTodos}/${id}`, {
    baseUrl: BASEURL,
    headers:{
      "token":"some token"
    }
  });
};

export const createTodoAPI = (title,body={})=>{
    return api.post(`${URLS.fetchTodos}/create/${title}`,body,{
        baseUrl:BASEURL,
        headers:{
          "token":"some token"
        }
    })
}

export const updateTodoAPI = (body={})=>{
    return api.post(`${URLS.fetchTodos}/edit`,body,{
        baseUrl:BASEURL,
        headers:{
          "token":"some token"
        }
    })
}

export const deleteTodoAPI = (body={})=>{
    return api.post(`${URLS.fetchTodos}/delete`,body,{
        baseUrl:BASEURL,
        headers:{
          "token":"some token"
        }
    })
};
