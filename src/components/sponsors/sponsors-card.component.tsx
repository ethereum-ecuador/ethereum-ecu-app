import Image from 'next/image'

import { SponsorsCardProps } from './sponsors.type'
import { Container } from '@/components/common'

export function SponsorsCard({ data, title, id }: SponsorsCardProps) {
  return (
    <section id={id} aria-label={id} className="sm:py-26 z-10 my-16">
      <Container>
        <h2 className="mx-auto max-w-2xl text-center font-display text-4xl font-medium tracking-tighter text-blue-900 sm:text-5xl md:text-6xl ">
          {title}
        </h2>
        <div className="flex flex-wrap justify-center gap-6 py-10 md:gap-10 lg:gap-14">
          {data.map((sponsor) => (
            <div
              key={sponsor.name}
              className="flex h-40 w-64 items-center justify-center bg-transparent"
            >
              <Image
                src={sponsor.logo.url}
                width={sponsor.logo.width}
                height={sponsor.logo.height}
                alt={sponsor.logo.alt}
                className="bg-transparent object-contain"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
