import Project from '../../components/Project'
import { projects } from '../../data/projects'
import { ContainerProjects, MyProjects, SubTitle, Title } from './styles'

const Projects = () => {
  return (
    <ContainerProjects>
      <Title>Meus Projetos</Title>
      <SubTitle>
        Aqui estão alguns dos projetos que desenvolvi, demonstrando minhas
        habilidades e experiência em diferentes tecnologias.
      </SubTitle>
      <MyProjects>
        {projects.map((p) => (
          <li data-aos="zoom-in" key={p.titulo}>
            <Project
              titulo={p.titulo}
              urlimage={p.urlimage}
              descricao={p.descricao}
              tags={p.tags}
              git="#"
              link="#"
            />
          </li>
        ))}
      </MyProjects>
    </ContainerProjects>
  )
}

export default Projects
