import React from 'react'

export const Hero = () => {
  return (
    <>
      <div className="relative flex min-h-screen flex-col items-center justify-center bg-cover bg-center" style={{backgroundImage: `linear-gradient(rgba(36, 17, 50, 0.7), rgba(36, 17, 50, 0.7)), url('./images/bg-eth.jpg')`}}>
        <div className="relative z-10 text-center">
          {' '}
          {/* Aumentamos el valor de z-index */}
          <h2 className="mb-2 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Road To
          </h2>
          <h1 className="mb-2 text-5xl font-bold text-white md:text-6xl lg:text-7xl">
            Blockchain Week
          </h1>
          <div>
            <p className="text-2xl text-white font-semibold md:text-3xl lg:text-4xl">
              Quito, Ecuador
            </p>
            <p className="mt-16 mb-6 text-xl text-white md:text-2xl lg:text-3xl">
              Del 15 al 19 de mayo
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
            <a
              href='https://www.eventbrite.com/e/lanzamiento-conferencia-road-to-blockchain-week-ecuador-dia-1-legal-tech-tickets-618618714227'
              target='_blank'
              rel='noopener noreferrer'
              className="inline-block rounded-lg bg-blue-500 px-6 py-3 text-xl font-semibold text-white shadow-md transition-colors duration-300 hover:bg-blue-700"
            >
              Obtén tus tickets
            </a>
            <a
              href="#about"
              className="inline-block rounded-lg border border-blue-500 bg-white px-6 py-3 text-xl font-semibold text-blue-500 shadow-md transition-colors duration-300 hover:bg-blue-100"
            >
              Más información
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
