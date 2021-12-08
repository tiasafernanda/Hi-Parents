import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/homepage/HomePage';
import Auth from '../components/Auth';
import Dashboard from '../pages';
// import ParentActivityDetail from '../pages/dashboardParents/ParentActivityDetail';

export default function RootRouter() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/auth/:type' exact element={<Auth />} />
        <Route path='/dashboard/*' element={<Dashboard />} />
        {/* <Route path="/activity" element={<ParentActivityDetail />} /> */}
      </Routes>
    </Router>
  );
}
