import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ClientDetail from '../pages/clientdetail/ClientDetail';
import HomePage from '../pages/homepage/HomePage';
import NannyDashboard from '../pages/nannydashboard/NannyDashboard';
import Auth from '../components/Auth';
import ChildActivity from '../pages/childactivity/ChildActivity';
import ActivityDetail from '../pages/activitydetail/ActivityDetail';

export default function Router() {
  return (
    <div>
      <Routes>
        <Route path='/' exact element={<HomePage />} />
        <Route path='/nanny' exact element={<NannyDashboard />} />
        <Route path='/detail' exact element={<ClientDetail />} />
        <Route path='/auth/:type' exact element={<Auth />} />
        <Route path='/child' exact element={<ChildActivity />} />
        <Route path='/activity' exact element={<ActivityDetail />} />
      </Routes>
    </div>
  );
}
