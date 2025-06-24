import SkillCarousel from '../../components/SkillCarousel'
import { skillsData } from '../../data/skillsData'
import { SkillSection, TextSkill, Title } from './styled'

const Skills = () => {
  return (
    <SkillSection>
      <Title>Habilidades Técnicas</Title>
      <TextSkill>
        Tecnologias e ferramentas que utilizo para criar soluções robustas e
        escaláveis
      </TextSkill>
      {Object.entries(skillsData).map(([categoria, skills]) => (
        <SkillCarousel key={categoria} category={categoria} skills={skills} />
      ))}
    </SkillSection>
  )
}

export default Skills
