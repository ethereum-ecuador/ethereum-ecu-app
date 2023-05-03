import Image from 'next/image'

export function Logo({ width, height }: LogoProps) {
  return (
    <>
      <Image
        src="/images/eth-ec.svg"
        alt="logo"
        width={width}
        height={height}
      />
    </>
  )
}

export type LogoProps = {
  width: number
  height: number
}
