import 'aos/dist/aos.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
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
    color: #FFF;
  }
`
export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`
export const Title = styled.h1`
  font-family: 'Playfair Display', serif;
  font-size: 64px;
  font-weight: bold;

  span {
    font-family: 'Playfair Display', serif;
    color: #007bff;
  }
`
export const TitleGold = styled(Title)`
  color: #f4c57e;
  text-align: center;
`

export const Subtitle = styled.h3`
  font-size: 24px;
  padding-top: 24px;
`
export const Text = styled.p`
  font-size: 20px;
  color: #e0e0e0;
`

export default EstiloGlobal
