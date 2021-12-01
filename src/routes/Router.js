import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ClientList from '../pages/clientList/ClientList';

export default function Router() {
  return (
    <div>
      <Routes>
        <Route path="/" exact element={<ClientList />} />
      </Routes>
    </div>
  );
}
