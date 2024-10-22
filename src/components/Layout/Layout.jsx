import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <div className="sidebar">
        <Sidebar />
      </div>
      <main className="content">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
