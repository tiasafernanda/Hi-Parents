import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import ClientDetail from '../pages/clientdetail/ClientDetail';
import HomePage from '../pages/homepage/HomePage';
// import NannyDashboard from '../pages/nannydashboard/NannyDashboard';
import Auth from '../components/Auth';
// import ClientList from '../pages/clientList/ClientList';
// import ChildActivity from '../pages/childactivity/ChildActivity';
// import ActivityDetail from '../pages/activitydetail/ActivityDetail';
// import DashboardParent from '../pages/dashboardParents/DashboardParent';
import Layout from '../components/layout/Layout';
// import ActifityParent from '../pages/dashboardParents/ActifityParent';
// import DashboardRouter from './DashboardRouter';

export default function Router() {
  return (
    <div>
      <Routes>
        <Route path='/' exact element={<HomePage />} />
        <Route path='/auth/:type' exact element={<Auth />} />
        <Route path='/dashboard/:param' exact element={<Layout />} />
      </Routes>
    </div>
  );
}
