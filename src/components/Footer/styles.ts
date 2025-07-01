import styled from 'styled-components'

export const FooterContainer = styled.footer`
  padding: 32px;
  text-align: center;
  background-color: ${(props) => props.theme.corPrincipal};
  color: ${(props) => props.theme.corDeFundo};
`
export const LinksIcon = styled.a`
  margin: 8px;
  font-size: 24px;
  color: ${(props) => props.theme.corDeFundo};
  display: inline-block;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.2);
    color: ${(props) => props.theme.corTerciaria};
  }
`
export const TextFooter = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  font-size: 18px;

  p {
    color: rgb(140, 140, 139);
    margin: 4px;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }
`
export const LinkName = styled.a`
  font-weight: bold
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    border-bottom: solid 2px ${(props) => props.theme.corTerciaria};
  }
`
