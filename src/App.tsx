import React from 'react'
import EstiloGlobal, { Container } from './styles'
import Home from './containers/Home'
import About from './containers/About'
import Projects from './containers/Projects'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <Home />
        <About />
        <Projects />
      </Container>
    </>
  )
}

export default App
