import * as S from './styles'

type Skill = {
  name: string
  icon: string
}

type SkillCarouselProps = {
  category: string
  skills: Skill[]
}

const SkillCarousel = ({ category, skills }: SkillCarouselProps) => {
  const loopSkills = [...skills, ...skills]

  return (
    <S.Wrapper>
      <S.Title data-aos="zoom-in-up">{category}</S.Title>
      <S.SliderWrapper>
        <S.SliderTrack className="slider-track">
          {loopSkills.map((skill, index) => (
            <S.Slide key={index}>
              <i className={skill.icon} />
              <p>{skill.name}</p>
            </S.Slide>
          ))}
        </S.SliderTrack>
      </S.SliderWrapper>
    </S.Wrapper>
  )
}

export default SkillCarousel
