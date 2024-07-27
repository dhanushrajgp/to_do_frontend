
import { BASEURL } from "../utilities/helper.ts";
import api from "./api";

const URLS = {
  fetchTodos: "item",
};


export const fetchToDosApi = async(headers) => {
  return api.get(`${URLS.fetchTodos}/get`, {
    baseUrl: BASEURL,
    headers:headers
  })
};

export const fetchTodoAPI = (id,headers) => {
  return api.get(`${URLS.fetchTodos}/${id}`, {
    baseUrl: BASEURL,
    headers:headers
  });
};

export const createTodoAPI = (title,body={},headers)=>{
    return api.post(`${URLS.fetchTodos}/create/${title}`,body,{
        baseUrl:BASEURL,
        headers:headers
    })
}

export const updateTodoAPI = (body={},headers)=>{
    return api.post(`${URLS.fetchTodos}/edit`,body,{
        baseUrl:BASEURL,
        headers:body.headers
    })
}

export const deleteTodoAPI = async(body={})=>{
  const response = await api.post(`${URLS.fetchTodos}/delete`, body, {
    baseURL: BASEURL,
    headers: body.headers,
  });
  return {
    data: response.data,
    status: response.status,
    statusText: response.statusText,
    headers: { ...response.headers }, 
  };
};
