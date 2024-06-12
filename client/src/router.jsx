import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Login from './pages/Login';
import PrivateRoute from './components/PrivateRoute';
import Tableau from './pages/Tableau';
import UpdateProfile from './pages/UpdateProfile'; 

const AppRouter = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/tableau" element={<Tableau />} />
          <Route path="/profile/update/:id" element={<UpdateProfile/>} />
      </Route>
     
    </Routes>
  </Router>
);

export default AppRouter;
