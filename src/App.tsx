import React from 'react'
import EstiloGlobal, { Container } from './styles'
import Home from './containers/Home'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <Home />
      </Container>
    </>
  )
}

export default App
