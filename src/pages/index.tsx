import Head from 'next/head'

import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { Newsletter } from '@/components/Newsletter'
import { Schedule } from '@/components/schedule'
import { Sponsors } from '@/components/Sponsors'
import { Speakers } from '@/components/speakers'

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
        <Speakers />
        <Schedule />
        <Sponsors />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
