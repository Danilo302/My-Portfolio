import 'bootstrap-icons/font/bootstrap-icons.css'
import * as S from './styles'

const Cards = () => (
  <S.CardContainer>
    <S.Card>
      <S.CardIcon className="bi bi-window-fullscreen"></S.CardIcon>
      <S.CardTitle>Front-end</S.CardTitle>
      <S.CardDescription>HTML, CSS, Javascript</S.CardDescription>
    </S.Card>
    <S.Card>
      <S.CardIcon className="bi bi-server"></S.CardIcon>
      <S.CardTitle>Back-end</S.CardTitle>
      <S.CardDescription>HTML, CSS, Javascript</S.CardDescription>
    </S.Card>
    <S.Card>
      <S.CardIcon className="bi bi-window-fullscreen"></S.CardIcon>
      <S.CardTitle>Front-end</S.CardTitle>
      <S.CardDescription>HTML, CSS, Javascript</S.CardDescription>
    </S.Card>
    <S.Card>
      <S.CardIcon className="bi bi-window-fullscreen"></S.CardIcon>
      <S.CardTitle>Front-end</S.CardTitle>
      <S.CardDescription>HTML, CSS, Javascript</S.CardDescription>
    </S.Card>
  </S.CardContainer>
)

export default Cards
