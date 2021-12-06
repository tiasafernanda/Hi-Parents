import React from "react";
import { Routes, Route } from "react-router-dom";
import NannyDashboard from "../pages/nannydashboard/NannyDashboard";
import DashboardParent from "../pages/dashboardParents/DashboardParent";
import { DashboardIcon } from "../components/Layout/DashboardIcons";
import ActivityParent from "../pages/dashboardParents/ActivityParent";
import UserProfile from "../pages/userProfile/UserProfile";
import StateDashboard from "../pages/emptyStates/StateDashboard";
import ChangePassword from "../pages/userProfile/ChangePassword";
import ModalParent from "../pages/dashboardParents/ModalParent";

export default function DashboardRouter(props) {
  const { params } = props;
  console.log(params);
  switch (params) {
    case "nanny":
      return <NannyDashboard />;
    case "parent":
      return <DashboardParent />;
    case "activity":
      return <ActivityParent />;
    case "user":
      return <UserProfile />;
    case "state":
      return <StateDashboard />;
    case "change":
      return <ChangePassword />;
    case "modal":
      return <ModalParent />;
  }
}
