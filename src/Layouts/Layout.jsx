import React from "react";
import { Outlet } from "react-router-dom";
import "../styles/Layout.css"

const Layout = () => {
  return (
    <div className="layout">
      <Outlet />
    </div>
  );
};

export default Layout;
