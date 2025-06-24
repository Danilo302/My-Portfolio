import * as S from './styles'

const Cards = () => (
  <S.CardContainer>
    {/* Card 1 - Aparece com fade-up */}
    <S.Card data-aos="fade-up" data-aos-delay="100" data-aos-duration="800">
      <S.CardIcon className="bi bi-window-fullscreen"></S.CardIcon>
      <S.CardTitle>Front-end</S.CardTitle>
      <S.CardDescription>HTML, CSS, Javascript, React</S.CardDescription>
    </S.Card>

    {/* Card 2 - Aparece com fade-up e um pouco de atraso */}
    <S.Card data-aos="fade-up" data-aos-delay="200" data-aos-duration="800">
      <S.CardIcon className="bi bi-terminal"></S.CardIcon>
      <S.CardTitle>Back-end</S.CardTitle>
      <S.CardDescription>Python, Django, Flask, APIs REST</S.CardDescription>
    </S.Card>

    {/* Card 3 - Aparece com zoom-in */}
    <S.Card data-aos="zoom-in" data-aos-delay="300" data-aos-duration="600">
      <S.CardIcon className="bi bi-database"></S.CardIcon>
      <S.CardTitle>Banco de dados</S.CardTitle>
      <S.CardDescription>SQL, MySQL, PostgreSQL</S.CardDescription>
    </S.Card>

    {/* Card 4 - Aparece com flip-left */}
    <S.Card data-aos="flip-left" data-aos-delay="400" data-aos-duration="1000">
      <S.CardIcon className="bi bi-kanban"></S.CardIcon>
      <S.CardTitle>Metodologias</S.CardTitle>
      <S.CardDescription>
        Metodologias Ágeis, Scrum, Kanbam, Trabalho em equipe
      </S.CardDescription>
    </S.Card>
  </S.CardContainer>
)

export default Cards
