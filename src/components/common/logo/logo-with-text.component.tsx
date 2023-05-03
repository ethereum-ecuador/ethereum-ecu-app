import { Logo } from './logo.component'
import Link from 'next/link'

export function LogoWithText({ width = 25, height = 25, classname = '' }) {
  return (
    <Link
      href="/"
      className={`flex flex-row items-center text-xl font-bold ${classname}`}
    >
      <Logo width={width} height={height} />
      <span style={{ marginLeft: '10px' }}>ETH Tricolor</span>
    </Link>
  )
}
