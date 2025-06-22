import Project from '../../components/Project'
import { projects } from '../../data/projects'
import { ContainerProjects, MyProjects, Title } from './styles'

const Projects = () => {
  return (
    <ContainerProjects>
      <Title>Meus Projetos</Title>
      <MyProjects>
        {projects.map((p) => (
          <li key={p.titulo}>
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
