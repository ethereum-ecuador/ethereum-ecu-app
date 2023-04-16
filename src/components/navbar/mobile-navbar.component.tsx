import React, { useState } from 'react'
import Image from 'next/image'
import { NavbarProps } from './navbar.type'
import { nanoid } from 'nanoid'

export function MobileNavbar({ links }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header
      className="fixed top-0 z-10 w-full bg-transparent"
      style={{ padding: '0 1rem' }}
    >
      <nav className="container mx-auto flex items-center justify-between px-4 py-4">
        <div className="flex flex-row items-center font-bold text-white">
          <a href="#" className="text-xl">
            <Image src="/images/logo.png" alt="" width={25} height={25} />
          </a>
          <span style={{ marginLeft: '10px' }}>ETH Tricolor</span>
        </div>
        <button
          className="focus:outline-none md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="h-6 w-6 text-white"
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
        <ul
          className={`space-x-8 text-white md:flex ${
            isOpen ? 'block' : 'hidden'
          }`}
        >
          {links.map((link) => (
            <li style={{ margin: 0 }} key={`${link.name}-${nanoid()}`}>
              <a href={link.href} className="hover:text-blue-300">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
