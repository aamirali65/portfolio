'use client'
// app/page.js
import Header from '../app/components/header'
import Hero from '../app/components/hero'
import Skill from '../app/components/skills'
import Footer from '../app/components/footer'
// import About from '../components/about-us'
import Project from '../app/components/project'
import Contact from '../app/components/contact'
import ScrollToTop from '../app/components/scroll-to-top'
import Experience from './components/experience'
import ClickSpark from './components/blitz/spark'

export default function Home() {
  return (
    <div className="min-h-screen relative">

    <ClickSpark
  sparkColor='#fff'
  sparkSize={10}
  sparkRadius={15}
  sparkCount={8}
  duration={400}
>

      <Header />
      <Hero />
      <Skill/>
      <Project />
      <Experience/>
      <Contact />
      <ScrollToTop />
      <Footer />
    
</ClickSpark>
  </div>
  )
}
