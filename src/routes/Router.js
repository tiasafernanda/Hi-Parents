import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ClientDetail from '../pages/clientdetail/ClientDetail';
import HomePage from '../pages/homepage/HomePage';
import NannyDashboard from '../pages/nannydashboard/NannyDashboard';
import Auth from '../components/Auth';
import ClientList from '../pages/clientList/ClientList';

export default function Router() {
  return (
    <div>
      <Routes>
        <Route path='/' exact element={<HomePage />} />
        <Route path='/nanny' exact element={<NannyDashboard />} />
        <Route path='/detail' exact element={<ClientDetail />} />
        <Route path='/auth/:type' exact element={<Auth />} />
        <Route path="/" exact element={<ClientList />} />
      </Routes>
    </div>
  );
}
