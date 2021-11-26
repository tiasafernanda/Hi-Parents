import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/homepage/HomePage";
import Auth from "../components/Auth";
import ProfileParents from "../components/DashbordParent/profileParents";

export default function Router() {
  return (
    <div>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/auth/:type" exact element={<Auth />} />
        <Route path="/profileParents" exact element={<ProfileParents />} />
      </Routes>
    </div>
  );
}
