import { Container } from '@/components/common/container'
import Image from 'next/image'

export function About() {
  return (
    <section id="about" className="px-5 py-10 sm:py-20">
      <Container className="relative z-10">
        <div className="flex flex-col items-center justify-center gap-2">
          <h2 className="text-center font-display text-4xl font-medium tracking-tighter text-blue-600 sm:text-5xl md:text-5xl lg:text-6xl">
            Road to
            <br />
            <strong>Blockchain Week</strong>
          </h2>
          <p className="mt-4 text-justify font-display text-base font-normal tracking-tight text-blue-900 md:mt-10 md:text-lg lg:text-2xl">
            Una semana de conferencias sobre la tecnología blockchain que se
            llevará a cabo del 15 al 19 de mayo en varias universidades de
            Quito, como la EPN, USFQ y UDLA. Cada día tendrá un enfoque
            diferente relacionado con la implementación de blockchain en
            Ecuador, con varias conferencias sobre descentralización, seguridad
            y eficiencia. El evento tiene como objetivo promover y difundir la
            tecnología blockchain en el país.
          </p>
          {/* <div className='my-6 w-[80vw] h-[30vh] sm:w-[70vw] sm:h-[50vh] lg:h-[50vh] max-w-[500px] max-h-[500px] xl:max-w-[750px] xl:max-h-[750px]' >
            <iframe className='w-full h-full aspect-square' src="https://www.youtube.com/embed/ZrBYKYlffYI" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </div> */}
          <div className="my-6 mt-6 h-[30vh] max-h-[500px] w-[80vw] max-w-[500px] sm:h-[50vh] sm:w-[70vw] lg:h-[50vh] xl:max-h-[750px] xl:max-w-[750px]">
            <a href="https://www.youtube.com/watch?v=lBVwOI75vko">
              <Image
                src="/images/cover.jpg"
                alt=""
                width={500}
                height={500}
                className="h-full w-full"
              />
            </a>
          </div>
        </div>
      </Container>
    </section>
  )
}
