export const BASEURL = process.env.BASEURL || `http://127.0.0.1:8000/v1/`;

export enum APISTATUS {
  IDLE = "IDLE",
  PENDING = "PENDING",
  SUCCESS = "SUCCESS",
  ERROR = "ERROR",
  FAILED="FAILED",
  TOKEN_FAILED="TOKEN FAILED"
}



export default function getHeaders(){
  let headers = {}
  const token = localStorage.getItem("token");
  headers = {
    "token":token
  }
  return headers;
}