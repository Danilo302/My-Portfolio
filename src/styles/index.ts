import 'aos/dist/aos.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
    list-style: none;
    text-decoration: none;
    scroll-behavior: smooth;

    scrollbar-width: thin;
    scrollbar-color: ${(props) => props.theme.corTerciaria} ${(props) =>
  props.theme.corDeFundo};
  }

  body {
    background-color: ${(props) => props.theme.corDeFundo};
    color: ${(props) => props.theme.corPrincipal};
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
    color: ${(props) => props.theme.corTerciaria};
  }

  @media (max-width: 768px) {
    font-size: 48px;
    text-align: center;
  }

  @media (max-width: 480px) {
    font-size: 36px;
  }
`
export const TitleGold = styled(Title)`
  color: ${(props) => props.theme.corQuartenaria};
  text-align: center;
`

export const Subtitle = styled.h3`
  font-size: 24px;
  padding-top: 24px;

  @media (max-width: 768px) {
    font-size: 20px;
    text-align: center;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`
export const Text = styled.p`
  font-size: 20px;
  color: ${(props) => props.theme.corSecundaria};

  @media (max-width: 768px) {
    font-size: 18px;
    text-align: center;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`

export default EstiloGlobal
