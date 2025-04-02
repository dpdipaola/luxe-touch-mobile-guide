
import React from 'react';
import { Outlet } from 'react-router-dom';
import MobileNavbar from './MobileNavbar';

const AppLayout = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-luxe-light to-white">
      <main className="pb-16">
        <Outlet />
      </main>
      <MobileNavbar />
    </div>
  );
};

export default AppLayout;
