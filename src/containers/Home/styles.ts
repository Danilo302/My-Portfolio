import styled from 'styled-components'

export const HomeContainer = styled.main`
  width: 100%;
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
  color: #e0e0e0;

  p {
    font-size: 20px;
  }
`
