import React, { useState } from 'react';
import Image from 'next/image';

export const MobileNavbar = ({ links }:{ links:any }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-transparent w-full z-10 top-0 fixed" style={{padding:'0 1rem'}}>
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-white font-bold flex flex-row items-center">
            <a href="#" className="text-xl">
            <Image src="/images/logo.png" alt="" width={25} height={25}/>
            </a>
            <span style={{marginLeft:'10px'}}>ETH Tricolor</span>
        </div>
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
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
        <ul className={`md:flex space-x-8 text-white ${isOpen ? 'block' : 'hidden'}`}>
            {links.map((link:any) => (
                <li style={{margin:0}} key={link.id}>
                    <a href={link.href} className="hover:text-blue-300">
                        {link.name}
                    </a>
                </li>
            ))}
        </ul>
      </nav>
    </header>
  );
};

