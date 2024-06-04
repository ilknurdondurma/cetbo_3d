import React, { useMemo } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './navbar';
import Footer from './footer';

export function Layout({ children }) {
  const bellekteTutulanNavbar = useMemo(() => <Navbar />, []);
  const bellekteTutulanFooter = useMemo(() => <Footer />, []);

  return (
    <div className="flex flex-col">
      {bellekteTutulanNavbar}
      <main className='min-h-screen'>
        {children}
        <Outlet />
      </main>
      {bellekteTutulanFooter}
    </div>
  );
};
