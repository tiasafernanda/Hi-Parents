import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/homepage/HomePage';
import Auth from '../components/Auth';

export default function Router() {
  return (
    <div>
      <Routes>
        <Route path='/' exact element={<HomePage />} />
        <Route path='/auth/:type' exact element={<Auth />} />
      </Routes>
    </div>
  );
}
