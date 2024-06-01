import React, {useMemo } from 'react';
import {Outlet } from 'react-router-dom';
import Navbar  from './navbar';
import Footer  from './footer';

export function Layout  ({ children }) {
    const bellekteTutulanNavbar = useMemo(() => <Navbar />, []);
    const bellekteTutulanFooter = useMemo(() => <Footer />, []);
  
    return (
      <div>
        {bellekteTutulanNavbar}
          <main className='flex-grow min-h-screen main'>
                {children}
                <Outlet />
            </main>
        <footer>{bellekteTutulanFooter}</footer>
        
      </div>
    );
  };