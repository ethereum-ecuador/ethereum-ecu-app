import LogoWithText from '@components/common/logo/LogoWithText'

const links = [
  {
    name: 'About',
    href: '#about',
  },
  {
    name: 'Políticas de Privacidad',
    href: '#',
  },
  {
    name: 'Contacto',
    href: '#',
  },
]

export function Footer() {
  return (
    <footer class="overflow-hidden p-8 bg-white">
      <div class="flex flex-col md:flex-row justify-center items-center md:justify-between gap-4">
        <span className=''>
          <LogoWithText />
        </span>
        <ul class="w-3/5 flex flex-wrap gap-6 justify-center md:justify-end items-center text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
          {links.map((link) => (
            <li key={`f-${link}`}>
              <a href={link.href} class="hover:underline">{link.name}</a>
            </li>
          ))}
        </ul>
      </div>
      <hr class="my-5 sm:my-6 border-gray-200 dark:border-gray-700 lg:my-8" />
      <p class="text-sm text-gray-500 text-center dark:text-gray-400">
        ETH Tricolor © 2023 ETH mitad del mundo, S.A.S B.I.C.<a href="https://www.eth-tricolor.org/" class="hover:underline">ETH Ecuador</a>.
        <br />
        Todos los derechos reservados.
      </p>
    </footer>
  )
}
