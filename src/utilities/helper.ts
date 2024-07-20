export const BASEURL = process.env.BASEURL || `http://127.0.0.1:8000/v1/`;

export enum APISTATUS {
  IDLE = "IDLE",
  PENDING = "PENDING",
  SUCCESS = "SUCCESS",
  ERROR = "ERROR",
}

