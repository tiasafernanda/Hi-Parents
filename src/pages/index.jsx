import { Routes, Route } from 'react-router-dom';
import NannyDashboard from './nannydashboard/NannyDashboard';
import ClientDetail from './clientdetail/ClientDetail';
import ClientList from './clientList/ClientList';
import NannyList from './nannyList/NannyList';
import ManageNanny from './nannyList/ManageChild';
import ChildActivity from './childactivity/ChildActivity';
import UserProfile from './userProfile/UserProfile';
import ChangePassword from './userProfile/ChangePassword';
import ActivityParent from './dashboardParents/ActivityParent';
import ParentActivityDetail from './dashboardParents/ParentActivityDetail';
import ProfileParent from './dashboardParents/DashboardParent';
import Layout from '../components/layout/Layout';

const Dashboard = () => {
  return (
    <>
      <Layout />
      <Routes>
        <Route path='/nannydashboard' element={<NannyDashboard />} />
        <Route path='/nannydashboard/clientdetail' element={<ClientDetail />} />
        <Route path='/clientlist' element={<ClientList />} />
        <Route path='/nannylist' element={<NannyList />} />
        <Route path='/nannylist/managenanny' element={<ManageNanny />} />
        <Route path='/childactivity' element={<ChildActivity />} />
        <Route path='/userprofilenanny' element={<UserProfile />} />
        <Route path='/userprofilenanny/changepassword' element={<ChangePassword />} />
        <Route path='/activityparent' element={<ActivityParent />} />
        <Route path='/activityparent/parentactivitydetail' element={<ParentActivityDetail />} />
        <Route path='/profileparent' element={<ProfileParent />} />
      </Routes>
    </>
  );
};

export default Dashboard;
