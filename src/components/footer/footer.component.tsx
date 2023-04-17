import { LogoWithText } from '@components/common/logo/index'
import {footerLinks as links} from './footer.lib'

export function Footer() {
  return (
    <footer className="overflow-hidden p-8 bg-white">
      <div className="flex flex-col md:flex-row justify-center items-center md:justify-between gap-4">
        <span className=''>
          <LogoWithText />
        </span>
        <ul className="w-3/5 flex flex-wrap gap-2 sm:gap-6 justify-center md:justify-end items-center text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
          {links.map((link) => (
            <li key={`f-${link}`}>
              <a href={link.href} className="hover:underline">{link.name}</a>
            </li>
          ))}
        </ul>
      </div>
      <hr className="my-5 sm:my-6 border-gray-200 dark:border-gray-700 lg:my-8" />
      <p className="text-sm text-gray-500 text-center dark:text-gray-400">
        ETH Tricolor © 2023 ETH mitad del mundo, S.A.S B.I.C.<a href="https://www.eth-tricolor.org/" className="hover:underline">ETH Ecuador</a>.
        <br />
        Todos los derechos reservados.
      </p>
    </footer>
  )
}
