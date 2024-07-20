
import {  useState } from "react";

import { APISTATUS } from "../utilities/helper.ts";

export const useCreateResource = () => {
  const [data, setData] = useState(null);
  const [requestStatus, setRequestStatus] = useState(APISTATUS.IDLE);

  const initCreateData = async (
    getData
  ) => {
    setRequestStatus(APISTATUS.PENDING);
    const response = await getData;
    if (!response) {
      setRequestStatus(APISTATUS.ERROR);
    }
    if (response) {
      setRequestStatus(APISTATUS.SUCCESS);
      setData(response);
    }
  };
  return { data, initCreateData,requestStatus };
};
