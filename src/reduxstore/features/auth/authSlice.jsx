import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchAuthToken } from "../../../api/auth";
import { APISTATUS } from "../../../utilities/helper.ts";
import { AxiosError } from "axios";
import checkStatus from "../../common.js";

const initialState = {
    token:"",
    status: APISTATUS.IDLE,
    error: null,
};

export const fetchAuth = createAsyncThunk("auth/fetchAuth", async (body) => {
    console.log(body,"bodyu")
    const response = await fetchAuthToken(body);
    console.log(response,"response")
    return response;
});
  

export const userSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{},
    extraReducers(builder){
        builder.addCase(fetchAuth.pending, (state, action) => {
            state.status = APISTATUS.PENDING;
            console.log("PENDING");
          })
          .addCase(fetchAuth.rejected, (state, action) => {
            state.status = APISTATUS.ERROR;
            state.error = action.error.message;
            console.log("REJECTED");
          }) 
          .addCase(fetchAuth.fulfilled, (state, action) => {
            console.log("action.payload",action.payload)
            if(action.payload.name == "AxiosError"){
                checkStatus(action,state);
            }
            else{
                state.token = action?.payload?.token;
                localStorage.setItem("token",action?.payload?.data?.token);
                state.status = APISTATUS.SUCCESS;
            }
          })
    }
})


export const getToken = (state)=> state.auth.token;
export const getAuthNetworkStatus = (state) => state.auth.status;
export const getAuthError = (state) => state.auth.error;
export default userSlice.reducer;
