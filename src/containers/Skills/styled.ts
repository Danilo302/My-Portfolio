import styled from 'styled-components'

export const SkillSection = styled.section`
  padding: 32px;
  padding-top: 64px;
  margin-top: 24px;
  border-top: solid 2px ${(props) => props.theme.corSecundaria};
  text-align: center;

  @media (max-width: 768px) {
    padding: 24px 16px;
  }

  @media (max-width: 480px) {
    padding: 24px 12px;
  }
`
