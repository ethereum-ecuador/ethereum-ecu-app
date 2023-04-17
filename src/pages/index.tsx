import Head from 'next/head'

import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { Newsletter } from '@/components/Newsletter'
import { Schedule } from '@/components/schedule'
import { Sponsors } from '@/components/sponsors'
import { Speakers } from '@/components/speakers'
import About from '@/components/about/about.component'

export default function Home() {
  return (
    <>
      <Head>
        <title>Road to Blockchain Week</title>
        <meta
          name="description"
          content="Road to Blockchain Week"
        />
      </Head>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Speakers />
        <Schedule />
        <Sponsors />
        {/* <Newsletter /> */}
      </main>
      <Footer />
    </>
  )
}
