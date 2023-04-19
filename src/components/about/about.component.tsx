import React, { useState } from 'react'
import { Container } from '../common/Container'

export default function About() {
  return (
    <section id='about' className='py-10 px-5 sm:py-20'>
      <Container className="relative z-10">
        <div className="flex flex-col gap-2 justify-center items-center">
          <h2 className="text-center font-display text-4xl md:text-5xl lg:text-6xl font-medium tracking-tighter text-blue-600 sm:text-5xl">
            Road to
            <br />
            <strong>Blockchain Week</strong>
          </h2>
          <p className="text-justify font-display text-base md:text-lg lg:text-2xl font-normal tracking-tight text-blue-900 mt-4 md:mt-10">
            Una semana de conferencias sobre la tecnología blockchain que se llevará a cabo del 15 al 19 de mayo en varias universidades de Quito, como la EPN, USFQ y UDLA. Cada día tendrá un enfoque diferente relacionado con la implementación de blockchain en Ecuador, con varias conferencias sobre descentralización, seguridad y eficiencia. El evento tiene como objetivo promover y difundir la tecnología blockchain en el país.
          </p>
          {/* <div className=' my-6 w-[80vw] h-[30vh] sm:w-[70vw] sm:h-[50vh] lg:h-[50vh] max-w-[500px] max-h-[500px] xl:max-w-[750px] xl:max-h-[750px]' >
            <iframe className='w-full h-full aspect-square' src="https://www.youtube.com/embed/ZrBYKYlffYI" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </div> */}
        </div>
      </Container>
    </section>
  )
}
