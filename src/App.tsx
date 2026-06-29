import { About } from './components/About'
import { Contact, Footer } from './components/Contact'
import { GameDemo } from './components/GameDemo'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import './index.css'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <GameDemo />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
