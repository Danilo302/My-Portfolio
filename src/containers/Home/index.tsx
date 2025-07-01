import TypingEffect from '../../components/TypingEffect'
import { Title, Text, Subtitle } from '../../styles'
import * as S from './styles'

const Home = () => {
  return (
    <S.HomeContainer id="home">
      <S.HomePresentation>
        <div>
          <Title>Olá, eu sou</Title>
          <Title>
            <TypingEffect text="Danilo Felix" speed={80} loop />
          </Title>
          <Subtitle>Desenvolvedor Full Stack</Subtitle>
        </div>
        <S.TextContainer>
          <Text>
            Desenvolvedor Full Stack Python em formação pela EBAC – Escola
            Britânica de Artes Criativas e Tecnologia, graduado em Sistemas de
            informação pela FAETERJ - Faculdade de Educação Tecnológica do
            Estado do Rio de Janeiro. Profissional com perfil autodidatismo e
            proativo. Possuo experiência em programação, desenvolvimento web e
            APIs.
          </Text>
        </S.TextContainer>
        <S.BtnContainer>
          <S.BtnProjetos href="#projetos">Projetos</S.BtnProjetos>
          <S.BtnLinks>
            <a
              href="https://github.com/Danilo302"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/danilo-felix-75639524b/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-linkedin"></i>
            </a>
          </S.BtnLinks>
        </S.BtnContainer>
      </S.HomePresentation>
      <S.HomePerfil>
        <img src="./images/perfil.png" alt="Foto de Danilo Felix" />
      </S.HomePerfil>
    </S.HomeContainer>
  )
}

export default Home
