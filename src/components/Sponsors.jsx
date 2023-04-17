import Image from 'next/image'

import { Container } from '@/components/common/Container'

export function Sponsors({ data, title, section }) {
  return (
    <section id={section} aria-label={section} className="my-32 sm:py-26 z-10">
      <Container>
        <h2 className="mx-auto max-w-2xl text-center font-display text-4xl font-medium tracking-tighter text-blue-900 sm:text-5xl">
          {title}
        </h2>
        <div className="mx-auto mt-20 grid max-w-max grid-cols-1 place-content-center gap-x-32 gap-y-12 sm:grid-cols-3 md:gap-x-16 lg:gap-x-32">
          {data.map((sponsor) => (
            <div
              key={sponsor.name}
              className="flex items-center justify-center"
            >
              <Image src={sponsor.logo} alt={sponsor.name} height={50} width={50} unoptimized />
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
