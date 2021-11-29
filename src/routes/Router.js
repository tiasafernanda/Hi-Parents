import React from "react";
import { Routes, Route } from "react-router-dom";
import DashboardParent from "../pages/dashboardParents/DashboardParent";
import HomePage from "../pages/homepage/HomePage";

export default function Router() {
  return (
    <div>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/dashboardparent" exact element={<DashboardParent />} />
      </Routes>
    </div>
  );
}
