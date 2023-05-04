import Image from 'next/image'

import { Container } from '@/components/common'
import { GithubIcon } from '@/icons'
import { ContributorCardProps } from './contributors.type'
import { contributors } from './contributors.lib'

export function Contributors() {
  return (
    <section aria-label="contributors">
      <Container>
        <div className="relative overflow-hidden px-4 py-20 backdrop-blur-md sm:-mx-6 sm:px-6 md:mx-0 md:rounded-5xl md:px-16">
          <div className="relative mx-auto grid max-w-2xl grid-cols-1 gap-5 md:max-w-3xl lg:max-w-5xl">
            <p className="text-center font-display text-4xl font-medium tracking-tighter text-blue-900 sm:text-5xl">
              Here are our heroes
            </p>
            <p className="text-center text-lg tracking-tight text-blue-900">
              Developed by
            </p>
            <div className="grid grid-cols-2 gap-2 md:grid-cols-4 lg:grid-cols-4">
              {contributors.map((contributor) => (
                <ContributorCard
                  id={contributor.id}
                  key={contributor.id}
                  image={contributor.image}
                  name={contributor.name}
                  role={contributor.role}
                  github={contributor.github}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

function ContributorCard({ image, name, role, github }: ContributorCardProps) {
  return (
    <div className="flex flex-col items-center justify-center p-3">
      <Image
        className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
        src={image}
        width={52}
        height={52}
        alt="{user.handle}"
      />
      <div className="my-3 flex flex-1 flex-col">
        <span className="text-center font-bold">{name}</span>
        <span className="flex-1 text-center text-gray-500">{role}</span>
      </div>
      <a href={github}>
        <GithubIcon height={20} width={20} />
      </a>
    </div>
  )
}
