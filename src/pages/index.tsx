import Head from 'next/head'

import { Footer } from '@/components/footer/footer.component'
import { Navbar } from '@/components/navbar/navbar.component'
import { Hero } from '@/components/Hero'
// import { Newsletter } from '@/components/Newsletter'
import { Schedule } from '@/components/schedule/schedule.component'
import { Sponsors } from '@/components/Sponsors'
import About from '@/components/About'
import { Speakers } from '@/components/speakers/Speakers'

const data = {
  hosts: [
    { name: 'Universidad San Fransisco de Quito', logo: '/images/hosts/usfq.png' },
    { name: 'Escuela Politécnica Nacional', logo: '/images/hosts/epn.png' },
    { name: 'Universidad de las Américas', logo: '/images/hosts/udla.png' },
  ],
  sponsors: [
    { name: 'Ethereum Ecuador', logo: '/images/hosts/udla.png' },
  ],
  allies: [
    { name: 'Club de Innovación EPN', logo: '/images/hosts/udla.png' },
  ]
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Road to Blockchain Week</title>
        <meta
          name="description"
          content="At DeceptiConf you' ll learn about the latest dark patterns being developed to trick even the smartest visitors, and you’ll learn how to deploy them without ever being detected."
        />
      </Head>
      <Navbar />

      <main className='w-screen'>
        <Hero />
        <About />
        <Speakers />
        <Schedule />
        <Sponsors data={data.hosts} title={"Anfitriones"} section={"hosts"} />
        <Sponsors data={data.sponsors} title={"Sponsors"} section={"sponsors"} />
        <Sponsors data={data.allies} title={"Aliados Estratégicos"} section={"sponsors"} />
        {/* <Newsletter /> */}
      </main>
      <Footer />

    </>
  )
}
