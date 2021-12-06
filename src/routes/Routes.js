import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/homepage/HomePage';
import Auth from '../components/Auth';
//import Login from '../components/auth/LoginNanny';
import Dashboard from '../pages';

export default function RootRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth/:type" exact element={<Auth />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}
