import React from "react";
import { Routes, Route } from "react-router-dom";
import NannyDashboard from "../pages/nannydashboard/NannyDashboard";
import DashboardParent from "../pages/dashboardParents/DashboardParent";
import { DashboardIcon } from "../components/Layout/DashboardIcons";
import ActifityParent from "../pages/dashboardParents/ActifityParent";
export default function DashboardRouter(props) {
  const { params } = props;
  switch (params) {
    case "nanny":
      return <NannyDashboard />;
    case "parent":
      return <DashboardParent />;
    case "actifity":
      return <ActifityParent />;
  }
}
