import React from 'react';
import { NavLink , useLocation } from 'react-router-dom';
import logo from '../assets/img/logo.png';
import leftArrow from '../assets/img/left-arrow.svg';
import dashboardIcon from '../assets/img/darhboard_alt.png';
import tableIcon from '../assets/img/Table.png';
import infoIcon from '../assets/img/Info_fill.png';
import profileIcon from '../assets/img/User_fill.png';
import organismeIcon from '../assets/img/Work.svg';
import mailIcon from '../assets/img/Message_fill.png';
import workflowIcon from '../assets/img/Send_fill.png';

import analyticsIcon from '../assets/img/bar-chart.png';


import '../assets/css/Sidebar.css';

const Sidebar = () => {
  const toggleSidebar = () => {
    document.querySelector('.sidebar').classList.toggle('collapsed');
    document.querySelector('.toggle-icon').classList.toggle('collapsed');
  };

  const location = useLocation();

  return (
    <div className="sidebar sticky pl-4 z-40 top-0 bg-white shadow-md hover:shadow-none flex flex-col">
      <div className="p-6 flex items-center justify-between">
        <img src={logo} alt="Logo" className="h-10" />
      </div>
      <div className="toggle-icon flex justify-end right" onClick={toggleSidebar}>
        <img src={leftArrow} alt="Toggle Sidebar" className="w-6 h-4" />
      </div>
      <nav className="mt-10 flex flex-col space-y-1">
      <NavLink to="/dashboard" activeClassName="active-link" className={`py-2.5 px-4 text-gray-700 flex items-center gap-2 hover:rounded-tl-full hover:rounded-bl-full ${location.pathname === '/dashboard' ? 'active-link' : ''}`}>
          <img src={dashboardIcon} alt="Dashboard" className="w-4 h-4" /> <span className="link-text">Dashboard</span>
        </NavLink>
        <NavLink to="/tableau" activeClassName="active-link" className={`py-2.5 px-4 text-gray-700 flex items-center gap-2 hover:rounded-tl-full hover:rounded-bl-full ${location.pathname === '/tableau' ? 'active-link' : ''}`}>
          <img src={tableIcon} alt="Profile" className="w-4 h-4" /> <span className="link-text">Tableau</span>
        </NavLink>
        <NavLink to="/profile" activeClassName="active-link" className={`py-2.5 px-4 text-gray-700 flex items-center gap-2 hover:rounded-tl-full hover:rounded-bl-full ${location.pathname === '/profile' ? 'active-link' : ''}`}>
          <img src={profileIcon} alt="Profile" className="w-4 h-4" /> <span className="link-text">Profile</span>
        </NavLink>
        <NavLink to="/mail" activeClassName="active-link" className={`py-2.5 px-4 text-gray-700 flex items-center gap-2 hover:rounded-tl-full hover:rounded-bl-full ${location.pathname === '/mail' ? 'active-link' : ''}`}>
          <img src={mailIcon} alt="Mail" className="w-4 h-4" /> <span className="link-text">Mail</span>
        </NavLink>
        <NavLink to="/workflow" activeClassName="active-link" className={`py-2.5 px-4 text-gray-700 flex items-center gap-2 hover:rounded-tl-full hover:rounded-bl-full ${location.pathname === '/workflow' ? 'active-link' : ''}`}>
          <img src={workflowIcon} alt="Workflow" className="w-4 h-4" /> <span className="link-text">Workflow</span>
        </NavLink>
        <NavLink to="/analytics" activeClassName="active-link" className={`py-2.5 px-4 text-gray-700 flex items-center gap-2 hover:rounded-tl-full hover:rounded-bl-full ${location.pathname === '/analytics' ? 'active-link' : ''}`}>
          <img src={analyticsIcon} alt="Analytics" className="w-4 h-4" /> <span className="link-text">Analytics</span>
        </NavLink>
        <NavLink to="/organisme" activeClassName="active-link" className={`py-2.5 px-4 text-gray-700 flex items-center gap-2 hover:rounded-tl-full hover:rounded-bl-full ${location.pathname === '/organisme' ? 'active-link' : ''}`}>
          <img src={organismeIcon} alt="Organisme" className="w-4 h-4" /> <span className="link-text">Organisme</span>
        </NavLink>
      </nav>
      <div className="pb-6 pl-4 mt-auto">
        <NavLink to="/help" className="text-blue-500">
          <img src={infoIcon} alt="" className="w-4 h-4" />
          <span className="link-text text-blue-500"> Need help?</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
