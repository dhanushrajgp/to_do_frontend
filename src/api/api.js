import axios from "axios";
import { BASEURL } from "../utilities/helper.ts";

const axiosParams = {
  baseURL: BASEURL,
};

const axiosInstance = axios.create(axiosParams);



const api = (axios) => {
  
  return {
    get: (url, config = {}) =>
      axios.get(url, config).catch((error)=>{
        console.log(error)
        return error;
      }),
    delete: (url, config = {}) =>
      axios.delete(url, config).catch((error)=>{
        console.log(error)
        return error;
      }),
    post: (url, body={}, config = {}) =>
      axios.post(url, body, config).catch((error)=>{
        console.log(error)
        return error;
      }),
    put: (url,body={}, config = {}) =>
      axios.put(url, body, config).catch((error)=>{
        console.log(error)
        return error;
      })
      ,
  };
};

export default api(axiosInstance);