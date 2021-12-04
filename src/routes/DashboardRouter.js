import React from 'react';
import NannyDashboard from '../pages/nannydashboard/NannyDashboard';
import DashboardParent from '../pages/dashboardParents/DashboardParent';
import ActifityParent from '../pages/dashboardParents/ActifityParent';
import ClientDetail from '../pages/clientdetail/ClientDetail';
import ChildActivity from '../pages/childactivity/ChildActivity';
import ActivityDetail from '../pages/activitydetail/ActivityDetail';
import ClientList from '../pages/clientList/ClientList';
import ProfileParents from '../components/DashbordParent/profileParents';
import NannyList from '../pages/nannyList/NannyList';
import ManageChild from '../pages/nannyList/ManageChild';

export default function DashboardRouter(props) {
  const { params } = props;
  switch (params) {
    case 'nanny':
      return <NannyDashboard />;
    case 'parent':
      return <DashboardParent />;
    case 'actifity':
      return <ActifityParent />;
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
  }
}
