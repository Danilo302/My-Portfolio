import * as S from './styles'

export type Props = {
  titulo: string
  urlimage?: string
  descricao: string
  tags: string[]
  link: string
  git: string
}

const Project = ({ titulo, urlimage, descricao, tags, link, git }: Props) => {
  return (
    <S.CardProject>
      <S.ImgProject src={urlimage} />
      <S.TitleProject>{titulo}</S.TitleProject>
      <S.DescriptionProject>{descricao}</S.DescriptionProject>
      <S.Tags>
        {tags.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </S.Tags>
      <S.BtnLinks>Link</S.BtnLinks>
      <S.BtnLinks>GitHub</S.BtnLinks>
    </S.CardProject>
  )
}

export default Project
