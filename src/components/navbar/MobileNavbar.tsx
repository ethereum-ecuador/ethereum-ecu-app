import React, { useState } from 'react';

export const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-transparent w-full z-10 top-0 fixed">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-white font-bold">
          <a href="#" className="text-xl">Mi Sitio</a>
        </div>
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6 text-black"
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
          <li><a href="#" className="hover:text-blue-300">Inicio</a></li>
          <li><a href="#" className="hover:text-blue-300">Acerca</a></li>
          <li><a href="#" className="hover:text-blue-300">Servicios</a></li>
          <li><a href="#" className="hover:text-blue-300">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
};

