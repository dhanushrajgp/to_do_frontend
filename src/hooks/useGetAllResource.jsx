import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getToken } from "../reduxstore/features/auth/authSlice";


export const useGetAllResource = (
  getFunction
) => {
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFunction);
  }, [dispatch,token]);
  return;
};
