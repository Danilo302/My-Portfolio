import styled from 'styled-components'

export const ObjectivesContainer = styled.ul`
  display: flex;
  padding-top: 24px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 24px;
  }
`
export const Objective = styled.li`
  padding: 24px;
  text-align: center;
`
export const IconsObj = styled.i`
  display: block;
  color: ${(props) => props.theme.corPrincipal};
  font-size: 2.5rem;
`
export const TitleSpan = styled.span`
  color: ${(props) => props.theme.corPrincipal};
  font-size: 18px;
`
export const Description = styled.p`
  color: ${(props) => props.theme.corSecundaria};
`
