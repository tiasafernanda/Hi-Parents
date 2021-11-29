import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ClientDetail from '../pages/clientdetail/ClientDetail';
import HomePage from '../pages/homepage/HomePage';
import NannyDashboard from '../pages/nannydashboard/NannyDashboard';

export default function Router() {
  return (
    <div>
      <Routes>
        <Route path='/' exact element={<HomePage />} />
        <Route path='/nanny' exact element={<NannyDashboard />} />
        <Route path='/detail' exact element={<ClientDetail />} />
      </Routes>
    </div>
  );
}
