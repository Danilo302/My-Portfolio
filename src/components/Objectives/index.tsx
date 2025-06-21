import * as S from './styles'

const Objectives = () => (
  <S.ObjectivesContainer>
    <S.Objective>
      <S.IconsObj className="bi bi-robot"></S.IconsObj>
      <S.TitleSpan>Inteligência Artificial & Machine Learning</S.TitleSpan>
      <S.Description>Integração de IA em Aplicações</S.Description>
    </S.Objective>
    <S.Objective>
      <S.IconsObj className="bi bi-arrow-repeat"></S.IconsObj>
      <S.TitleSpan>Automação & DevOps</S.TitleSpan>
      <S.Description>
        Infraestrutura como Código, CI/CD & Observability, Cloud Native
        Development
      </S.Description>
    </S.Objective>
    <S.Objective>
      <S.IconsObj className="bi bi-bug"></S.IconsObj>
      <S.TitleSpan>Qualidade & Testes</S.TitleSpan>
      <S.Description>Testes Automatizados, Segurança Aplicada</S.Description>
    </S.Objective>
  </S.ObjectivesContainer>
)

export default Objectives
