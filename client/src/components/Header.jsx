import React from 'react';
import avatar from '../assets/img/avatar.png';
import calendrie from '../assets/img/calendrie.png';
import logoutIcon from '../assets/img/Logout.png';

import '../assets/css/Header.css';

const Header = () => {
  return (
    <div className="flex z-30 sticky p-4 px-8 bg-slate-50 top-0 justify-between items-center mb-8">
      <h1 className="text-2xl font-bold">Candidates</h1>
      <span className="text-gray-500 border rounded px-2 p-1 shadow-md flex gap-2">
        <img src={calendrie} alt="" className="h-6" /> 29 Janvier 2022 <span className="text-yellow-400">|</span> 13:00
      </span>
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-3">
          <img src={avatar} alt="User Avatar" className="w-8 h-8 rounded-full" />
          <div>
            <span className="text-gray-700 font-medium">Najib Haoudi</span>
            <span className="block text-gray-500 text-sm">Admin</span>
          </div>
          <a href="#">
            <img src={logoutIcon} alt="Logout" className="w-6" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
