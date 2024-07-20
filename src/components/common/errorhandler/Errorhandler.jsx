import React from "react";
import Nodatafound from "../nodatafound/Nodatafound";
import SkeletonLoader from "../loader/SkeletonLoader";
import { APISTATUS } from "../../../utilities/helper.ts";

const ErrorHandler = ({
  requestStatus,
  content,
  redirectPath,
  name
}) => {
  return requestStatus === APISTATUS.PENDING ? (
    <SkeletonLoader />
  ) : requestStatus === APISTATUS.ERROR ? (
    <Nodatafound content="503 SERVICE UNAVAILABLE. CONNECT SERVER TO FETCH THE DATA"></Nodatafound>
  ) : requestStatus === APISTATUS.FAILED ? (
    <Nodatafound content={content} redirectPath={redirectPath} name={name} />
  ):(
    <Nodatafound content={content} redirectPath={redirectPath} name={name}/>
  );
};

export default ErrorHandler;
