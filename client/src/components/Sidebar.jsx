import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/img/logo.png';
import leftArrow from '../assets/img/left-arrow.svg';
import dashboardIcon from '../assets/img/darhboard_alt.png';
import infoIcon from '../assets/img/Info_fill.png';

import '../assets/css/Sidebar.css';

const Sidebar = () => {
  const toggleSidebar = () => {
    document.querySelector('.sidebar').classList.toggle('collapsed');
    document.querySelector('.toggle-icon').classList.toggle('collapsed');
  };

  return (
    <div className="sidebar sticky pl-4 z-40 top-0 bg-white shadow-md hover:shadow-none flex flex-col">
      <div className="p-6 flex items-center justify-between">
        <img src={logo} alt="Logo" className="h-10" />
      </div>
      <div className="toggle-icon flex justify-end right" onClick={toggleSidebar}>
        <img src={leftArrow} alt="Toggle Sidebar" className="w-6 h-4" />
      </div>
      <nav className="mt-10 flex flex-col space-y-1">
      <NavLink to="/dashboard" className="py-2.5 px-4 text-gray-700 flex items-center gap-2 hover:rounded-tl-full hover:rounded-bl-full">
          <img src={dashboardIcon} alt="Dashboard" className="w-4 h-4" /> <span className="link-text">Dashboard</span>
        </NavLink>
        <NavLink to="/profile" className="py-2.5 px-4 text-gray-700 flex items-center gap-2 hover:rounded-tl-full hover:rounded-bl-full">
          <img src={dashboardIcon} alt="Profile" className="w-4 h-4" /> <span className="link-text">Profile</span>
        </NavLink>
        <NavLink to="/mail" className="py-2.5 px-4 text-gray-700 flex items-center gap-2 hover:rounded-tl-full hover:rounded-bl-full">
          <img src={dashboardIcon} alt="Mail" className="w-4 h-4" /> <span className="link-text">Mail</span>
        </NavLink>
        <NavLink to="/workflow" className="py-2.5 px-4 text-gray-700 flex items-center gap-2 hover:rounded-tl-full hover:rounded-bl-full">
          <img src={dashboardIcon} alt="Workflow" className="w-4 h-4" /> <span className="link-text">Workflow</span>
        </NavLink>
        <NavLink to="/analytics" className="py-2.5 px-4 text-gray-700 flex items-center gap-2 hover:rounded-tl-full hover:rounded-bl-full">
          <img src={dashboardIcon} alt="Analytics" className="w-4 h-4" /> <span className="link-text">Analytics</span>
        </NavLink>
        <NavLink to="/organisme" className="py-2.5 px-4 text-gray-700 flex items-center gap-2 hover:rounded-tl-full hover:rounded-bl-full">
          <img src={dashboardIcon} alt="Organisme" className="w-4 h-4" /> <span className="link-text">Organisme</span>
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
