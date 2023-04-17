import React, { useState, useEffect } from 'react';
import { DesktopNavbar } from './DesktopNavbar';
import { MobileNavbar } from './MobileNavbar';

const links = [
  { name: 'Inicio', href: '#' },
  { name: 'Cronograma', href: '#schedule' },
  { name: 'Speakers', href: '#speakers' },
  { name: 'Sponsors', href: '#sponsors' },
]

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
      <nav className='w-full text-white py-4 px-6'>
        <span className="block md:hidden">
            <MobileNavbar links={links} />
        </span>
        <span className="hidden md:block">
          <div className="flex flex-row items-center justify-between">
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