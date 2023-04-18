import React, { useState, useEffect } from 'react'
import { DesktopNavbar } from './desktop-navbar.component'
import { MobileNavbar } from './mobile-navbar.component'
import { links } from './navbar.lib'
import clsx from 'clsx'

export const Navbar = ({ hasBackground }: NavbarProps) => {
  const [_, setScroll] = useState(0)
  const [background, setBackground] = useState(
    hasBackground ? 'bg-[#241132]' : 'transparent'
  )

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [background])

  const handleScroll = () => {
    const newScroll = window.scrollY
    setScroll(newScroll)
    if (newScroll > 50) {
      setBackground('bg-[#241132]')
    } else {
      if (!hasBackground) setBackground('bg-transparent')
    }
  }

  return (
    <header
      className={clsx(
        `fixed top-0 z-40 w-full transition-colors duration-500 ease-in-out ${background}`
      )}
    >
      <nav className="w-full py-4 text-white">
        <span className="block md:hidden">
          <MobileNavbar links={links} />
        </span>
        <span className="hidden md:block">
          <div className="flex flex-row items-center justify-between px-6">
            <DesktopNavbar links={links} />
          </div>
        </span>
      </nav>
    </header>
  )
}

export interface LinkProps {
  name: string
  href: string
}

interface NavbarProps {
  hasBackground?: boolean
}
