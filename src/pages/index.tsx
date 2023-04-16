import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { Newsletter } from '@/components/Newsletter'
import { Schedule } from '@/components/Schedule'
import { Speakers } from '@/components/Speakers'
import { Sponsors } from '@/components/Sponsors'
<<<<<<< HEAD
=======
import  Nav  from '@/components/Navbar' 
import {AboutComponent} from '@/components/About'
import { Hero } from '@/components/Hero'

>>>>>>> d5c8fecd2062694e45353920c7dd38d67b7e4e88

export default function Home() {
  return (
    <>
      <Head>
        <title>DeceptiConf - A community-driven design conference</title>
<<<<<<< HEAD
        <meta
          name="description"
          content="At DeceptiConf you' ll learn about the latest dark patterns being developed to trick even the smartest visitors, and you’ll learn how to deploy them without ever being detected."
        />
      </Head>
      <Navbar/>
      <main>
=======
        
        </Head>
        <Nav/>
        {/* <Header /> */}
        <main>
>>>>>>> d5c8fecd2062694e45353920c7dd38d67b7e4e88
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
