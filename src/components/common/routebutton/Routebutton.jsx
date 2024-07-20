import React from "react";
import "./Routebutton.css";
import { Link } from "react-router-dom";

const Routebutton = ({ path,name }) => {

  return <Link to={`/${path}`} className="Routebutton">
    <button variant={"contained"}>{name}</button></Link>;
};

export default Routebutton;
