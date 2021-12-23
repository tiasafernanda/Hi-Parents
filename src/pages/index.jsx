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
import ActivityDetail from './activitydetail/ActivityDetail';
import DashboardParent from './dashboardParents/DashboardParent';
import Empty from '../components/empty/Empty';
import StateDashboard from './emptyStates/StateDashboard';
import CreateActivity from './createactivity/CreateActivity';
import EditActivity from './editactivity/EditActivity';

const Dashboard = () => {
  return (
    <>
      <Layout />
      <Routes>
        <Route path='/nannydashboard' element={<NannyDashboard />} />
        <Route path='/clientdetail/:appointment_id' element={<ClientDetail />} />
        <Route path='/clientlist' element={<ClientList />} />
        <Route path='/childactivity' element={<ChildActivity />} />
        <Route path='/createactivity/:appointment_id' element={<CreateActivity />} />
        <Route path='/editactivity/:appointment_id' element={<EditActivity />} />
        <Route path='/activitydetail/:appointment_id' element={<ActivityDetail />} />
        <Route path='/nannylist' element={<NannyList />} />
        <Route path='/managenanny' element={<ManageNanny />} />
        <Route path='/userprofilenanny' element={<UserProfile />} />
        <Route path='/changepassword' element={<ChangePassword />} />
        <Route path='/activityparent' element={<ActivityParent />} />
        <Route path='/parentdashboard' element={<DashboardParent />} />
        <Route path='/parentactivitydetail' element={<ParentActivityDetail />} />
        <Route path='/profileparent' element={<ProfileParent />} />
        <Route path='/empty' element={<Empty />} />
        <Route path='/statedashboard' element={<StateDashboard />} />
        <Route path='*' element={<div>Not Found</div>} />
      </Routes>
    </>
  );
};

export default Dashboard;
