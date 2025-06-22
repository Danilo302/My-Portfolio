export type Props = {
  titulo: string
  urlimage?: string
  descricao: string
  tags: []
  link: string
  git: string
}

const Project = ({ titulo }: Props) => {
  return <h1>{titulo}</h1>
}
