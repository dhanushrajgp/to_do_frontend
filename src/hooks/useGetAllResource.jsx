import { useEffect, useState } from "react";


export const useGetAllResource = (
  getFunction
) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getFunction);
  }, []);
  return;
};
