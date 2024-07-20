import { useEffect, useState } from "react";
import { APISTATUS } from "../utilities/helper.ts";

export const useResource = (
  getData
) => {
  const [requestStatus, setRequestStatus] = useState(APISTATUS.IDLE);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (requestStatus == APISTATUS.IDLE) {
      setRequestStatus(APISTATUS.PENDING);
      const handlerequest = async () => {
        const response = await getData;
        if (!response) {
          setRequestStatus(APISTATUS.ERROR);
        }
        if (response) {
          setData(response.data);
          setRequestStatus(APISTATUS.SUCCESS);
        }
      };
      handlerequest();
    }
  }, []);

  return { requestStatus, data,setRequestStatus };
};
