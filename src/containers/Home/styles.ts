import styled from 'styled-components'

export const HomeContainer = styled.main`
  display: flex;
  color: ${(props) => props.theme.corPrincipal};
  margin-top: 180px;
  margin-bottom: 160px;
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

export const TextContainer = styled.div`
  margin-top: 56px;
  margin-bottom: 56px;
`
export const BtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const BtnProjetos = styled.a`
  padding: 12px 32px;
  color: #fff;
  background-color: ${(props) => props.theme.corTerciaria};
  width: 172px;
  height: 44px;
  text-align: center;
  font-size: 18px;
  border-radius: 12px;
  transition: all ease 0.3s;

  &:hover {
    filter: brightness(1.1);
    transform: scale(1.1);
  }
`
export const BtnLinks = styled.div`
  display: flex;

  a {
    margin: 24px;
    font-size: 32px;
    color: ${(props) => props.theme.corSecundaria};
    transition: all ease 0.3s;

    &:hover {
      color: ${(props) => props.theme.corPrincipal};
      transform: scale(1.3);
    }
  }
`
