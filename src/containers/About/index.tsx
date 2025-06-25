import Cards from '../../components/Cards'
import Objectives from '../../components/Objectives'
import { Subtitle, Title, Text } from '../../styles'
import * as S from './styles'

const About = () => {
  return (
    <S.ContainerAbount>
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
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius
            sapiente delectus voluptatem error blanditiis id ab laboriosam quia
            sit architecto quisquam nemo accusamus qui corrupti adipisci, enim
            alias doloribus suscipit.
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
