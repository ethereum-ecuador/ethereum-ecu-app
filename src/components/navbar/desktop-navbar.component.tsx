import React from 'react'
import { LogoWithText } from '@/components/common/logo';
import { LinkProps, NavbarProps } from './navbar.type'

export function DesktopNavbar({ links }: NavbarProps) {
  return (
    <>
      <LogoWithText />
      <ul className="flex flex-row items-center justify-between space-x-8 text-lg font-semibold" style={{ width: '40%' }}>
        {links.map((link: LinkProps) => (
          <li style={{ margin: 0 }} key={link.name}>
            <a href={link.href} className="hover:text-blue-300">
              {link.name}
            </a>
          </li>
        ))}
      </ul>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        style={{ borderRadius: '9999px' }}>
        Tickets
      </button>
    </>
  );
}
