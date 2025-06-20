import * as S from './styles'

const Home = () => {
  return (
    <S.HomeContainer>
      <S.HomePresentation>
        <div>
          <S.Title>Olá, eu sou</S.Title>
          <S.NameTitle>Danilo Felix</S.NameTitle>
          <S.Subtitle>Desenvolvedor Full Stack</S.Subtitle>
        </div>
        <S.Text>
          <p>
            Desenvolvedor Full Stack Python em formação pela EBAC – Escola
            Britânica de Artes Criativas e Tecnologia, graduado em Sistemas de
            informação pela FAETERJ - Faculdade de Educação Tecnológica do
            Estado do Rio de Janeiro. Profissional com perfil autodidatismo e
            proativo. Possuo experiência em programação, desenvolvimento web e
            APIs.
          </p>
        </S.Text>
      </S.HomePresentation>
      <S.HomePerfil>
        <img src="./images/perfil.png" />
      </S.HomePerfil>
    </S.HomeContainer>
  )
}

export default Home
