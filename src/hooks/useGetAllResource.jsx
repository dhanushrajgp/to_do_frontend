import { useEffect } from "react";
import { useDispatch } from "react-redux";


export const useGetAllResource = (
  getFunction
) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFunction);
  }, [dispatch]);
  return;
};
