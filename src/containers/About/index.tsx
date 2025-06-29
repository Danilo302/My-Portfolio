import Cards from '../../components/Cards'
import Objectives from '../../components/Objectives'
import { Subtitle, Title, Text } from '../../styles'
import * as S from './styles'

const About = () => {
  return (
    <S.ContainerAbount id="sobre">
      <div>
        <Title>
          <span>Sobre Mim</span>
        </Title>
        <Subtitle>Desenvolvedor apaixonado por tecnologia e inovação</Subtitle>
      </div>
      <S.TextContainer>
        <S.TextAbout>
          <Subtitle>Minha Trajetória</Subtitle>
          <Text>
            Desde cedo, sempre fui movido pela curiosidade e pelo desejo de
            entender como as coisas funcionam. Minha paixão por tecnologia
            floresceu naturalmente, impulsionando minha decisão de cursar
            Sistemas de Informação na FAETERJ 🎓 e me especializar como
            Desenvolvedor Full Stack Python pela EBAC 🚀. <br />
            <br />
            Ao longo da minha jornada, desenvolvi projetos que uniram
            criatividade ✨ e eficiência 📈, como o sistema automatizado de
            pedidos de TCC, além de diversas aplicações web com foco em
            usabilidade e automação 🧠. <br />
            <br />
            Gosto de aprender de forma autodidata 📚, sou proativo 💪 e acredito
            que a tecnologia é uma poderosa ferramenta de transformação 🌍. Meu
            objetivo é continuar evoluindo, sempre buscando soluções inovadoras
            que simplifiquem processos e impactem positivamente a vida das
            pessoas 💡❤️.
          </Text>
        </S.TextAbout>
        <Cards />
      </S.TextContainer>

      <Subtitle>Objetivos e Áreas de Interesse</Subtitle>
      <Objectives />
    </S.ContainerAbount>
  )
}

export default About
