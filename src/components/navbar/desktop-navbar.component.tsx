import Image from 'next/image'
import React from 'react'
import { NavbarProps } from './navbar.type'
import { nanoid } from 'nanoid'

export function DesktopNavbar({ links }: NavbarProps) {
  return (
    <header
      className="fixed top-0 z-10 w-full bg-transparent"
      style={{ padding: '0 1rem' }}
    >
      <nav
        className="container mx-auto flex items-center justify-between px-4 py-4"
        style={{ height: '80px' }}
      >
        <div className="flex flex-row items-center font-bold">
          <a href="#" className="text-xl">
            <Image src="/images/logo.png" alt="" width={25} height={25} />
          </a>
          <span style={{ marginLeft: '10px' }}>ETH Tricolor</span>
        </div>
        <ul
          className="flex flex-row items-center justify-between space-x-8 text-lg font-semibold"
          style={{ width: '40%' }}
        >
          {links.map((link) => (
            <li style={{ margin: 0 }} key={`${link.name}-${nanoid()}`}>
              <a href={link.href} className="hover:text-blue-300">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <button
          className="rounded-full bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
          style={{ borderRadius: '9999px' }}
        >
          Tickets
        </button>
      </nav>
    </header>
  )
}
