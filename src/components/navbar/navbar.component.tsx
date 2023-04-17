import React, { useState, useEffect } from 'react';
import { DesktopNavbar } from './desktop-navbar.component';
import { MobileNavbar } from './mobile-navbar.component';
import { links } from './navbar.lib';


export const Navbar = () => {
  const [scroll, setScroll] = useState(0);
  const [background, setBackground] = useState('transparent');

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [background]);

  const handleScroll = () => {
    const newScroll = window.pageYOffset;
    setScroll(newScroll);
    if (newScroll > 50) {
      setBackground('bg-[#241132]');
    } else {
      setBackground('bg-transparent');
    }
  };

  return (
    <header className={`w-full z-40 top-0 fixed transition-colors duration-500 ease-in-out ${background}`}>
      <nav className='w-full text-white py-4'>
        <span className="block md:hidden">
            <MobileNavbar links={links} />
        </span>
        <span className="hidden md:block">
          <div className="flex flex-row items-center justify-between px-6">
            <DesktopNavbar links={links} />
          </div>
        </span>
      </nav>
    </header>
  );
};


export interface LinkProps {
  name: string;
  href: string;
}