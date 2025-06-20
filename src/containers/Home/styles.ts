import styled from 'styled-components'

export const HomeContainer = styled.main`
  display: flex;
  color: #f8f9fa;
  margin-top: 32px;
  height: 600px;
`
export const HomePerfil = styled.div`
  margin-left: 24px;
  display: flex;
  max-width: 640px;
  width: 100%;
`
export const HomePresentation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 24px;
`
export const Subtitle = styled.h3`
  margin-top: 8px;
  font-size: 32px;
`

export const Title = styled.h1`
  font-family: 'Playfair Display', serif;
  font-size: 64px;
  font-weight: bold;
`
export const NameTitle = styled(Title)`
  color: #007bff;
`
export const Text = styled.div`
  margin-top: 56px;
  margin-bottom: 56px;
  color: #e0e0e0;

  p {
    font-size: 20px;
  }
`
export const BtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const BtnProjetos = styled.a`
  padding: 12px 32px;
  color: #f8f9fa;
  background-color: #007bff;
  width: 172px;
  height: 44px;
  text-align: center;
  font-size: 18px;
  border-radius: 12px;

  &:hover {
    background-color: #007bcf;
  }
`
export const BtnLinks = styled.div`
  display: flex;

  a {
    margin: 24px;
    font-size: 32px;
    color: #e0e0e0;

    &:hover {
      color: #f8ffff;
    }
  }
`
