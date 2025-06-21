import styled from 'styled-components'
import variables from '../../styles/variables'

export const ContainerAbount = styled.section`
  margin-top: 64px;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Title = styled.h1`
  font-family: 'Playfair Display', serif;
  color: ${variables.destaque};
  font-size: 64px;
  font-weight: bold;
  text-align: center;
`
export const Subtitle = styled.h3`
  font-size: 24px;
  color: ${variables.brancoForte};
  padding-top: 24px;
`

export const TextContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 64px;
`
export const TextAbout = styled.div`
  padding-top: 24px;
  display: flex;
  flex-direction: column;
`

export const Text = styled.p`
  font-size: 18px;
  color: ${variables.brancoFraco};
  padding-top: 18px;
`
