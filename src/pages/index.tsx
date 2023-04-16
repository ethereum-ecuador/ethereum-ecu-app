import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Newsletter } from '@/components/Newsletter'
import { Schedule } from '@/components/Schedule'
import { Speakers } from '@/components/Speakers'
import { Sponsors } from '@/components/Sponsors'
import  Nav  from '@/components/Navbar' 
import {AboutComponent} from '@/components/About'
import { Hero } from '@/components/Hero'


export default function Home() {
  return (
    <>
      <Head>
        <title>DeceptiConf - A community-driven design conference</title>
        
        </Head>
        <MainNavbar/>
        {/* <Header /> */}
        <main>
        <Hero />
        {/* <Speakers/> */}
        <Schedule />
        <AboutComponent/>
        <Sponsors />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
