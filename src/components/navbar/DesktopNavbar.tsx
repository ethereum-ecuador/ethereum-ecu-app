import Image from 'next/image';
import React from 'react'

export function DesktopNavbar({ links }:{ links:any }) {
    return (
        <header className="bg-transparent w-full z-10 top-0 fixed" style={{padding:'0 1rem'}}>
          <nav className="container mx-auto px-4 py-4 flex items-center justify-between" style={{height:'80px'}}>
            <div className="font-bold flex flex-row items-center">
              <a href="#" className="text-xl">
                <Image src="/images/logo.png" alt="" width={25} height={25}/>
              </a>
              <span style={{marginLeft:'10px'}}>ETH Tricolor</span>
            </div>
                <ul className="flex flex-row items-center justify-between space-x-8 text-lg font-semibold" style={{width:'40%'}}>
                {links.map((link:any) => (
                    <li style={{margin:0}} key={link.id}>
                        <a href={link.href} className="hover:text-blue-300">
                            {link.name}
                        </a>
                    </li>
                 ))}
            </ul>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            style={{borderRadius: '9999px'}}>
                Tickets
            </button>
          </nav>
        </header>
      );
}
