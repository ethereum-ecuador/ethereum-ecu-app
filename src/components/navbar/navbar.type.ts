export interface NavbarProps {
  links: LinkProps[]
}

export interface LinkProps {
  name: string
  href: string
  target?: string
}
