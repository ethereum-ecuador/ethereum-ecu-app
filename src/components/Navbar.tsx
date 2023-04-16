import React from 'react';
import { DesktopNavbar } from './navbar/DesktopNavbar';
import { MobileNavbar } from './navbar/MobileNavbar';

export const Navbar = () => {
  return (
    <>
      <div className="hidden md:block">
        <MobileNavbar />
      </div>
      <div className="block md:hidden">
        <DesktopNavbar />
      </div>
    </>
  );
};

