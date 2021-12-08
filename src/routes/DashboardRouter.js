import React from 'react';
import NannyDashboard from '../pages/nannydashboard/NannyDashboard';
import DashboardParent from '../pages/dashboardParents/DashboardParent';
import ActivityParent from '../pages/dashboardParents/ActivityParent';
import ClientDetail from '../pages/clientdetail/ClientDetail';
import ChildActivity from '../pages/childactivity/ChildActivity';
import ActivityDetail from '../pages/activitydetail/ActivityDetail';
import ClientList from '../pages/clientList/ClientList';
import ProfileParents from '../pages/dashboardParents/DashboardParent';
import NannyList from '../pages/nannyList/NannyList';
import ManageChild from '../pages/nannyList/ManageChild';
import UserProfile from '../pages/userProfile/UserProfile';
import StateDashboard from '../pages/emptyStates/StateDashboard';
import ChangePassword from '../pages/userProfile/ChangePassword';
// import { DashboardIcon } from '../components/Layout/DashboardIcons';
// import { Routes, Route } from 'react-router-dom';

export default function DashboardRouter(props) {
  const { params } = props;
  console.log(params);
  switch (params) {
    case 'nanny':
      return <NannyDashboard />;
    case 'parent':
      return <DashboardParent />;
    case 'activity':
      return <ActivityParent />;
    case 'client-detail':
      return <ClientDetail />;
    case 'child-activity':
      return <ChildActivity />;
    case 'activity-detail':
      return <ActivityDetail />;
    case 'client':
      return <ClientList />;
    case 'parent-form':
      return <ProfileParents />;
    case 'nanny-list':
      return <NannyList />;
    case 'manage':
      return <ManageChild />;
    case 'state':
      return <StateDashboard />;
    case 'change':
      return <ChangePassword />;
    case "modal":
      return <ModalParent />;
    case 'user':
      return <UserProfile />;
  }
}
