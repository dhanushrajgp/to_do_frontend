import axios, { Axios, AxiosPromise, AxiosResponse } from "axios";
import { useCallback, useEffect, useState } from "react";

import { APISTATUS } from "../utilities/helper";

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
      setData(response.data);
      setRequestStatus(APISTATUS.SUCCESS);
    }
  };
  return { data, initCreateData };
};
