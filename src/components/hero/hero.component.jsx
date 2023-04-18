import React from 'react'

export const Hero = () => {
  return (
    <>
      <div
        className="relative flex min-h-screen flex-col items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(128, 0, 128, 0.2), rgba(128, 0, 128, 0.2)), url('./images/bg-eth.jpg')`,
        }}
      >
        <div className="relative z-10 text-center">
          {' '}
          {/* Aumentamos el valor de z-index */}
          <h2 className="mb-2 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Road To
          </h2>
          <h1 className="mb-4 text-5xl font-bold text-white md:text-6xl lg:text-7xl">
            Blockchain Week
          </h1>
          <p className="mb-6 text-xl text-white md:text-2xl lg:text-3xl">
            Quito, Ecuador
          </p>
          <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
            <a
              href="eventbrite.com"
              target="_blank"
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
