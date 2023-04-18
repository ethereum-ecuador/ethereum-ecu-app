import React from 'react'
import { LogoWithText } from '@/components/common/logo';
import { LinkProps, NavbarProps } from './navbar.type'
import TicketsButton from '@/components/common/tickets-button.component';

export function DesktopNavbar({ links }: NavbarProps) {
  return (
    <>
      <LogoWithText />
      <ul className="flex flex-row items-center justify-between space-x-8 text-lg font-semibold" style={{ width: '40%' }}>
        {links.map((link: LinkProps) => (
          <li style={{ margin: 0 }} key={link.name}>
            <a href={link.href} className="hover:text-blue-300" target={link.target}>
              {link.name}
            </a>
          </li>
        ))}
      </ul>
      <TicketsButton />
    </>
  );
}
