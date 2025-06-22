import { projects } from '../../data/projects'

const Projects = () => {
  return (
    <section>
      <h1>Meus Projetos</h1>
      <ul>
        {projects.map((p) => (
          <li key={p.titulo}>
            <h2>{p.titulo}</h2>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Projects
