import SkillCarousel from '../../components/SkillCarousel'
import { skillsData } from '../../data/skillsData'
import { TitleGold, Text } from '../../styles'
import { SkillSection } from './styled'

const Skills = () => {
  return (
    <SkillSection id="skills">
      <TitleGold>Habilidades Técnicas</TitleGold>
      <Text>
        Tecnologias e ferramentas que utilizo para criar soluções robustas e
        escaláveis
      </Text>
      {Object.entries(skillsData).map(([categoria, skills]) => (
        <SkillCarousel key={categoria} category={categoria} skills={skills} />
      ))}
    </SkillSection>
  )
}

export default Skills
