import styled from 'styled-components'

export const ContainerAbount = styled.section`
  margin-top: 64px;
  padding-top: 64px;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`

export const TextContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 64px;
  text-align: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
    margin-top: 16px;
  }
`
export const TextAbout = styled.div`
  padding-top: 24px;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    align-items: center;
    padding-top: 16px;
  }
`
