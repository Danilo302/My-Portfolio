import React from 'react'
import EstiloGlobal, { Container } from './styles'
import Home from './containers/Home'
import About from './containers/About'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <Home />
        <About />
      </Container>
    </>
  )
}

export default App
