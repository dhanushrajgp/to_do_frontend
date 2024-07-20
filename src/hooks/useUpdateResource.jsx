import { useState } from "react";
import { APISTATUS } from "../utilities/helper.ts";

export const useUpdateResource = () => {
  const [data, setData] = useState(null);
  const [requestStatus, setRequestStatus] = useState(APISTATUS.IDLE);
  const updateData = async ( getData) => {
    setRequestStatus(APISTATUS.PENDING);
    const response = await getData;
    if(!response){
      setRequestStatus(APISTATUS.ERROR);
    }
    if(response){
      console.log("response",response)
      setData(response);
      setRequestStatus(APISTATUS.SUCCESS);
    }
  };
  return { data, updateData,requestStatus };
};
