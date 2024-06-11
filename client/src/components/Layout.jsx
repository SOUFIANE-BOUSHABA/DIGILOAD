import React from 'react';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';
import Header from './Header';

import '../assets/css/Layout.css';

const Layout = () => {
  return (
    <body className='bg-slate-50'>
           <div className="flex">
            <Sidebar />
            <div className="flex-1">
                <Header />
                <div className="responsive p-8">
                <Outlet />
                </div>
            </div>
            </div>
    </body>
   
  );
};

export default Layout;
