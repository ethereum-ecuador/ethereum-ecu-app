import { FooterLinkProps } from './footer-link.type'

export function FooterLink({ href, name }: FooterLinkProps) {
  if (href.startsWith('https')) {
    return (
      <li>
        <a
          href={href}
          className="hover:underline"
          target="_blank"
          rel="noreferrer"
        >
          {name}
        </a>
      </li>
    )
  }

  return (
    <li>
      <a href={href} className="hover:underline">
        {name}
      </a>
    </li>
  )
}
