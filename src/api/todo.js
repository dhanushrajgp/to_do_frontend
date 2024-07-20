
import { BASEURL } from "../utils/helper";
import api from "./api";

const URLS = {
  fetchTodos: "item",
};

export const fetchToDosApi = async() => {
  return api.get(URLS.fetchTodos, {
    baseUrl: BASEURL,
  })
};

export const fetchTodoAPI = (id) => {
  return api.get(`${URLS.fetchTodos}/${id}`, {
    baseUrl: BASEURL,
  });
};

export const createTodoAPI = (title,body={})=>{
    return api.post(`${URLS.fetchTodos}/create/${title}`,body,{
        baseUrl:BASEURL
    })
}

export const updateTodoAPI = (body={})=>{
    return api.post(`${URLS.fetchTodos}/edit`,body,{
        baseUrl:BASEURL
    })
}

export const deleteTodoAPI = (body={})=>{
    return api.post(`${URLS.fetchTodos}/delete`,body,{
        baseUrl:BASEURL
    })
};
