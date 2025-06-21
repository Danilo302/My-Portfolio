import styled, { createGlobalStyle } from 'styled-components'
import variables from './variables'

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
    list-style: none;
    text-decoration: none;
  }

  body {
    background-color: ${variables.fundo};
  }
`
export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`

export default EstiloGlobal
