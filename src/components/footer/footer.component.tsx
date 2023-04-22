import { nanoid } from 'nanoid'
import { LogoWithText } from '@components/common'
import { footerLinks as links } from './footer.lib'
import { FooterLink } from './footer-link.component'

export function Footer() {
  return (
    <footer className="overflow-hidden bg-white p-8">
      <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:justify-between">
        <span className="">
          <LogoWithText />
        </span>
        <ul className="flex w-3/5 flex-wrap items-center justify-center gap-2 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mb-0 sm:gap-6 md:justify-end">
          {links.map((link) => (
            <FooterLink
              key={`footer-link-${nanoid()}`}
              href={link.href}
              name={link.name}
            />
          ))}
        </ul>
      </div>
      <hr className="my-5 border-gray-200 dark:border-gray-700 sm:my-6 lg:my-8" />
      <p className="text-center text-sm text-gray-500 dark:text-gray-400">
        ETH Tricolor © 2023 ETH mitad del mundo, S.A.S B.I.C.
        <br />
        Todos los derechos reservados.
      </p>
    </footer>
  )
}
