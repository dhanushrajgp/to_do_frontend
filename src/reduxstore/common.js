import { APISTATUS } from "../utilities/helper.ts";

export default function checkStatus(action,state){
    if(action.payload.message === "Network Error"){
      state.status=APISTATUS.ERROR;
      state.error= action.payload.message;
  }
    else if(action.payload.response.data === "token expired"){
      state.status = APISTATUS.TOKEN_FAILED;
      state.error= action.payload.data;
    }
    else {
      state.status=APISTATUS.FAILED;
      state.error= action.payload.message;
  }
}