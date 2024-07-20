import React from "react";
import "./Nodatafound.css";
import Routebutton from "../routebutton/Routebutton";

const Nodatafound = ({
  content,
  redirectPath,name
}) => {
  return (
    <div className="Nodatafound">
      {content}
      {redirectPath && <Routebutton path={redirectPath} name={name} />}
    </div>
  );
};

export default Nodatafound;
