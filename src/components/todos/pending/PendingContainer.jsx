import React from "react";
import "../../../styles/PendingContainer.css";
import PendingCard from "./PendingCard";
import Semiheader from "../../common/semiheader/Semiheader";

const PendingContainer = ({ pendingItems, pendingCount }) => {
  return (
    <div className="pendingLayout">
      <Semiheader title={"Pending Items"} />
      <div className="pendingContainer">
        {pendingItems?.map((item, index) => {
          return <PendingCard key={index} data={item} />;
        })}
      </div>
    </div>
  );
};

export default PendingContainer;
