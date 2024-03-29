import { Countdown } from './countdown-timer.component'

export function Hero() {
  return (
    <div
      className="relative flex min-h-screen flex-col items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(36, 17, 50, 0.7), rgba(36, 17, 50, 0.7)), url('./images/bg-eth.jpg')`,
      }}
    >
      <div className="relative z-10 px-5 text-center">
        <h2 className="mb-1 mt-10 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
          Road To
        </h2>
        <h1 className="mb-2 text-4xl font-bold text-white md:text-6xl lg:text-7xl">
          Blockchain Week
        </h1>
        <div className="mb-6 flex flex-col gap-10">
          <p className="text-2xl font-semibold text-white md:text-3xl lg:text-4xl">
            Quito, Ecuador
          </p>
          <Countdown />
          <p className="text-xl text-white md:text-2xl lg:text-3xl">
            Evento Gratuito
            <br />
            del 15 al 20 de mayo
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
          <a
            href="https://www.eventbrite.com/cc/launch-road-to-blockchain-week-ecuador-2023-2075369"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-lg bg-blue-500 px-6 py-3 text-xl font-semibold text-white shadow-md transition-colors duration-300 hover:bg-blue-700"
          >
            Reserva tu lugar ahora
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
  )
}
