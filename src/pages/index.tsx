import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Newsletter } from '@/components/Newsletter'
import { Schedule } from '@/components/Schedule'
import { Sponsors } from '@/components/Sponsors'
import Nav from '@/components/Navbar'
import { AboutComponent } from '@/components/About'
import { Hero } from '@/components/Hero'

export default function Home() {
  return (
    <>
      <Head>
        <title>DeceptiConf - A community-driven design conference</title>
      </Head>
      <Nav />
      <main>
        <Hero />
        <Schedule />
        <AboutComponent />
        <Sponsors />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
