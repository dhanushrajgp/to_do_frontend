import { BASEURL } from "../utilities/helper.ts";
import api from "./api";

const URLS = {
  fetchAuth: "auth",
};


export const fetchAuthToken = (body={})=>{
    return api.post(`${URLS.fetchAuth}/login`,body,{
        baseUrl:BASEURL,
    })
}



