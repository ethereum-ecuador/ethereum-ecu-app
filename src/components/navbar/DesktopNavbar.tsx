import React from 'react'

export function DesktopNavbar() {
    return (
        <header className="bg-transparent w-full z-10 top-0 fixed">
          <nav className="container mx-auto px-4 py-4 flex items-center justify-between" style={{height:'80px'}}>
            <div className="text-white font-bold">
              <a href="#" className="text-xl">Mi Sitio</a>
            </div>
                <ul className="flex flex-row items-center justify-between space-x-8 text-black text-lg font-semibold" style={{width:'40%'}}>
              <li><a href="#" className="hover:text-blue-300">Inicio</a></li>
              <li><a href="#" className="hover:text-blue-300">Acerca</a></li>
              <li><a href="#" className="hover:text-blue-300">Servicios</a></li>
              <li><a href="#" className="hover:text-blue-300">Contacto</a></li>
            </ul>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                Button
            </button>
          </nav>
        </header>
      );
}
