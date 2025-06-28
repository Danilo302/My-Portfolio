import React, { useEffect, useState } from 'react'
import AOS from 'aos'
import EstiloGlobal, { Container } from './styles'
import Home from './containers/Home'
import About from './containers/About'
import Projects from './containers/Projects'
import Skills from './containers/Skills'
import Contact from './containers/Contact'
import Footer from './components/Footer'
import Navbar from './components/NavBar'
import { ThemeProvider } from 'styled-components'
import themeDark from './themes/dark'
import themeLight from './themes/light'

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

  const [isThemeDark, setIsThemeDark] = useState(true)

  function themeMode() {
    setIsThemeDark(!isThemeDark)
  }

  return (
    <ThemeProvider theme={isThemeDark ? themeDark : themeLight}>
      <EstiloGlobal />
      <Navbar changeTheme={themeMode} />
      <Container>
        <Home />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </Container>
      <Footer />
    </ThemeProvider>
  )
}

export default App
