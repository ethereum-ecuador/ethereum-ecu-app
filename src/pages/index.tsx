import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/Hero'
import { Newsletter } from '@/components/Newsletter'
import { Schedule } from '@/components/Schedule'
import { Sponsors } from '@/components/Sponsors'

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
      <main>
        <Hero />
        <Schedule />
        <Sponsors />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
