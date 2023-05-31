import React from "react";
import "./_dashboardLayout.scss";
import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar/sidebar";
import TopBar from "./topbar/topbar";

export default function DashboardLayout() {
  return (
    <div>
      <div className="layout">
        <TopBar />
        <Sidebar />
        <div className="main">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
