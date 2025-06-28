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
`
export const TextAbout = styled.div`
  padding-top: 24px;
  display: flex;
  flex-direction: column;
`

export const Text = styled.p`
  font-size: 18px;
  color: ${(props) => props.theme.corSecundaria};
  padding-top: 18px;
`
