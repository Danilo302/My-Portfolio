import Cards from '../../components/Cards'
import * as S from './styles'

const About = () => {
  return (
    <S.ContainerAbount>
      <div>
        <S.Title>Sobre Mim</S.Title>
        <span>Desenvolvedor apaixonado por tecnologia e inovação</span>
      </div>
      <S.TextAbount>
        <div>
          <h3>Minha Trajetória</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius
            sapiente delectus voluptatem error blanditiis id ab laboriosam quia
            sit architecto quisquam nemo accusamus qui corrupti adipisci, enim
            alias doloribus suscipit.
          </p>
        </div>
        <Cards />
      </S.TextAbount>
    </S.ContainerAbount>
  )
}

export default About
