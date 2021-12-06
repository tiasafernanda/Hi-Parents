import { Routes, Route } from 'react-router-dom';
import NannyDashboard from './nannydashboard/NannyDashboard';
import ClientList from './clientList/ClientList';
import NannyList from './nannyList/NannyList';
import ChildActivity from './childactivity/ChildActivity';
import UserProfile from './userProfile/UserProfile';
import Layout from '../components/layout/Layout';

const Dashboard = () => {
  const drawerWidth = 290;
  return (
    <>
      <Layout />
      <div style={{ width: `calc(100% - ${drawerWidth}px)` }}>
        <Routes>
          <Route path="/nannydashboard" element={<NannyDashboard />} />
          <Route path="/clientlist" element={<ClientList />} />
          <Route path="/nannylist" element={<NannyList />} />
          <Route path="/childactivity" element={<ChildActivity />} />
          <Route path="/userprofile" element={<UserProfile />} />
        </Routes>
      </div>
    </>
  );
};

export default Dashboard;
