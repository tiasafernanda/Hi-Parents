import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/homepage/HomePage';
import Layout from '../components/layout/Layout';

export default function Router() {
  return (
    <div>
      <Routes>
        <Route path="/" exact element={<Layout />} />
      </Routes>
    </div>
  );
}
