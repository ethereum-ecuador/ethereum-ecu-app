import React, { useState } from 'react';
import LogoWithText from '@components/common/logo/LogoWithText';
import { LinkProps, NavbarProps } from './navbar.type'
import { nanoid } from 'nanoid'

export const MobileNavbar = ({ links }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="w-full z-10 flex justify-between items-center px-6">
        <LogoWithText />
        <button
          className="md:hidden focus:outline-none z-50"
          onClick={() => {
            setIsOpen(!isOpen)
          }}
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path d="M6 18L18 6M6 6l12 12"></path>
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            )}
          </svg>
        </button>
      </div>
      <div className="w-full z-10 flex justify-center items-center bg-[#241132]">
        <ul className={`md:flex text-white text-lg font-semibold  ${isOpen ? 'block' : 'hidden'}`}>
          {links.map((link: LinkProps) => (
            <li className='text-center' key={`${link.name}-${nanoid()}`}>
              <a href={link.href} className="hover:text-blue-300 " onClick={() => setIsOpen(false)}>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
