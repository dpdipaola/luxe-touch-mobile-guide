
import React from 'react';
import { Outlet } from 'react-router-dom';

const AppLayout = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-luxe-light to-white">
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
