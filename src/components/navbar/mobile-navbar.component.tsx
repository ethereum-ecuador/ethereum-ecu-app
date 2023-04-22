import React, { useState } from 'react'

import clsx from 'clsx'
import { nanoid } from 'nanoid'
import { LogoWithText, TicketsButton } from '@/components/common'
import { LinkProps, ResponsiveNavbarProps } from './navbar.type'

export const MobileNavbar = ({ links }: ResponsiveNavbarProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div className="z-10 flex w-full items-center justify-between px-6">
        <LogoWithText />
        <button
          className="z-50 focus:outline-none"
          onClick={() => {
            setIsOpen(!isOpen)
          }}
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
      </div>
      <div className="z-10 flex w-full items-center justify-center bg-[#241132]">
        <div
          className={clsx(
            `${isOpen ? 'flex' : 'hidden'} flex-col justify-center gap-3 py-4`
          )}
        >
          <ul className="text-lg font-semibold text-white">
            {links.map((link: LinkProps) => (
              <li className="text-center" key={`${link.name}-${nanoid()}`}>
                <a
                  href={link.href}
                  target={link.target}
                  className="hover:text-blue-300"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <TicketsButton />
        </div>
      </div>
    </>
  )
}
