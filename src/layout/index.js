import React, { useMemo } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './navbar';
import Footer from './footer';
import Navigation from './navigation'

export function Layout({ children }) {
  const bellekteTutulanNavbar = useMemo(() => <Navbar />, []);
  const bellekteTutulanNavigations = useMemo(() => <Navigation />, []);
  const bellekteTutulanFooter = useMemo(() => <Footer />, []);

  return (
    <div className="flex flex-col">
      {bellekteTutulanNavigations}
      {bellekteTutulanNavbar}
      <main className='min-h-screen '>
        {children}
        <Outlet />
      </main>
      {bellekteTutulanFooter}
    </div>
  );
};
      