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
    case 'clientdetail':
      return <ClientDetail />;
    case 'childactivity':
      return <ChildActivity />;
    case 'activitydetail':
      return <ActivityDetail />;
    case 'client':
      return <ClientList />;
    case 'parentform':
      return <ProfileParents />;
    case 'nannylist':
      return <NannyList />;
    case 'manage':
      return <ManageChild />;
  }
}
