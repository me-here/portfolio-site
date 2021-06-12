import Head from 'next/head'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import IntroSection from '../components/IntroSection'
import SkillsSection from '../components/SkillsSection'
import WorkSection from '../components/WorkSection'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Mihir Thanekar -- Developer</title>
        <meta name="description" content="Mihir Thanekar's Developer Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar/>
      <main>
        <Hero/>
        <IntroSection/>
        <SkillsSection/>
        <WorkSection/>
      </main>
      <Footer />
    </div>
  )
}
