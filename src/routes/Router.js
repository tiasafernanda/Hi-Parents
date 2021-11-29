import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import HomePage from '../pages/homepage/HomePage';
import NannyList from '../pages/nannyList/NannyList';

export default function Router() {
  return (
    <div>
      <Routes>
        <Route path="/" exact element={<Layout />} />
      </Routes>
    </div>
  );
}
