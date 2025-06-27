import React, { useEffect } from 'react'
import AOS from 'aos'
import EstiloGlobal, { Container } from './styles'
import Home from './containers/Home'
import About from './containers/About'
import Projects from './containers/Projects'
import Skills from './containers/Skills'
import Contact from './containers/Contact'
import Footer from './components/Footer'
import Navbar from './components/NavBar'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: false,
      mirror: false,
      offset: 120,
      delay: 0,
      anchorPlacement: 'top-bottom'
    })

    AOS.refresh()
  }, [])

  return (
    <>
      <EstiloGlobal />
      <Navbar />
      <Container>
        <Home />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </Container>
      <Footer />
    </>
  )
}

export default App
