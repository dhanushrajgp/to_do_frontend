import React from "react";
import "../../../styles/DoneContainer.css";
import DoneCard from "./DoneCard";
import Semiheader from "../../common/semiheader/Semiheader";

const DoneContainer = ({ doneItems, doneCount }) => {
  return (
    <div className="doneLayout">
      <Semiheader title={"Done Items"} />
      <div className="doneContainer">
        {doneItems?.map((item, index) => {
          return <DoneCard key={index} data={item} />;
        })}
      </div>
    </div>
  );
};

export default DoneContainer;
