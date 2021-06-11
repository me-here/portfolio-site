import Head from 'next/head'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import IntroSection from '../components/IntroSection'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Mihir Thanekar -- Developer</title>
        <meta name="description" content="Mihir Thanekar's Developer Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar/>
      <Hero/>
      <IntroSection/>

      <main>
        Hello World! This is the main content!
      </main>

      <footer>
        Footer
      </footer>
    </div>
  )
}
