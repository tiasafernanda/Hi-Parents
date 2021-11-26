import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/homepage/HomePage';

export default function Router() {
  return (
    <div>
      <Routes>
        <Route path="/" exact element={<HomePage/>}/>
      </Routes>
    </div>
  );
}
