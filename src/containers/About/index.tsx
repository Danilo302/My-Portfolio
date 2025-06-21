import Cards from '../../components/Cards'
import Objectives from '../../components/Objectives'
import * as S from './styles'

const About = () => {
  return (
    <S.ContainerAbount>
      <div>
        <S.Title>Sobre Mim</S.Title>
        <S.Subtitle>
          Desenvolvedor apaixonado por tecnologia e inovação
        </S.Subtitle>
      </div>
      <S.TextContainer>
        <S.TextAbout>
          <S.Subtitle>Minha Trajetória</S.Subtitle>
          <S.Text>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius
            sapiente delectus voluptatem error blanditiis id ab laboriosam quia
            sit architecto quisquam nemo accusamus qui corrupti adipisci, enim
            alias doloribus suscipit.
          </S.Text>
        </S.TextAbout>
        <Cards />
      </S.TextContainer>

      <S.Subtitle>Objetivos e Áreas de Interesse</S.Subtitle>
      <Objectives />
    </S.ContainerAbount>
  )
}

export default About
