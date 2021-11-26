import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/homepage/HomePage';
import NannyDashboard from '../pages/nannydashboard/NannyDashboard';

export default function Router() {
  return (
    <div>
      <Routes>
        <Route path='/' exact element={<HomePage />} />
        <Route path='/nannydashboard' exact element={<NannyDashboard />} />
      </Routes>
    </div>
  );
}
