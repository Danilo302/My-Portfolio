import 'bootstrap-icons/font/bootstrap-icons.css'
import * as S from './styles'

const Cards = () => (
  <S.CardContainer>
    <S.Card>
      <S.CardIcon className="bi bi-window-fullscreen"></S.CardIcon>
      <S.CardTitle>Front-end</S.CardTitle>
      <S.CardDescription>HTML, CSS, Javascript, React</S.CardDescription>
    </S.Card>
    <S.Card>
      <S.CardIcon className="bi bi-terminal"></S.CardIcon>
      <S.CardTitle>Back-end</S.CardTitle>
      <S.CardDescription>Python, Django, Flask, APIs REST</S.CardDescription>
    </S.Card>
    <S.Card>
      <S.CardIcon className="bi bi-database"></S.CardIcon>
      <S.CardTitle>Banco de dados</S.CardTitle>
      <S.CardDescription>SQL, MySQL, PostgreSQL</S.CardDescription>
    </S.Card>
    <S.Card>
      <S.CardIcon className="bi bi-kanban"></S.CardIcon>
      <S.CardTitle>Metodologias</S.CardTitle>
      <S.CardDescription>
        Metodologias Ágeis, Scrum, Kanbam, Trabalho em equipe
      </S.CardDescription>
    </S.Card>
  </S.CardContainer>
)

export default Cards
