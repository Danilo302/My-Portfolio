import styled from 'styled-components'
import variables from '../../styles/variables'

export const ObjectivesContainer = styled.ul`
  display: flex;
  padding-top: 24px;
`
export const Objective = styled.li`
  padding: 24px;
  text-align: center;
`
export const IconsObj = styled.i`
  display: block;
  color: ${variables.brancoForte};
  font-size: 2.5rem;
`
export const TitleSpan = styled.span`
  color: ${variables.brancoForte};
  font-size: 18px;
`
export const Description = styled.p`
  color: ${variables.brancoFraco};
`
