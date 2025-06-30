import styled from 'styled-components'
import { Subtitle } from '../../styles'

export const ContainerProjects = styled.section`
  padding-top: 48px;
`
export const SubTitleProjects = styled(Subtitle)`
  font-size: 18px;
  margin-bottom: 40px;
  text-align: center;
`

export const MyProjects = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 24px;
  padding: 0;
  margin: 0;
`
