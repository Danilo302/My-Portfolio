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
      <div>
        <S.ImgProject src={urlimage} />
        <S.TitleProject>{titulo}</S.TitleProject>
        <S.DescriptionProject>{descricao}</S.DescriptionProject>
      </div>
      <div>
        <S.Tags>
          {tags.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </S.Tags>
        <S.BtnLinksContainer>
          <S.BtnLinks href={git}>
            <i className="bi bi-github"></i> GitHub
          </S.BtnLinks>
          <S.BtnLinks href={link}>
            <i className="bi bi-globe"></i> Link
          </S.BtnLinks>
        </S.BtnLinksContainer>
      </div>
    </S.CardProject>
  )
}

export default Project
