import { Title, Text, Subtitle } from '../../styles'
import * as S from './styles'

const Contact = () => {
  const email = 'danilofelix827@gmail.com'

  const copiarEmail = () => {
    navigator.clipboard
      .writeText(email)
      .catch((err) => console.error('Falha ao copiar:', err))
  }

  return (
    <S.ContactConatiner id="contato">
      <Title>
        Entre em <span>Contato</span>
      </Title>
      <Text>
        Você tem um projeto em mente ou gostaria de bater um papo sobre alguma
        oportunidade? Adoraria saber mais!
      </Text>
      <S.Content>
        <Subtitle>Vamos conversar!</Subtitle>
        <Text>
          Tem alguma ideia ou projeto para discutir? Estou aqui para conversar e
          explorar oportunidades juntos!
        </Text>
        <S.ListContact>
          <S.ItensContact data-aos="fade-right">
            <S.IconContact>
              <i className="bi bi-envelope" />{' '}
            </S.IconContact>
            <div>
              <S.InfoName>Email:</S.InfoName>
              <div>
                <S.LinksContact onClick={copiarEmail}>
                  danilofelix827@gmail.com <i className="bi bi-copy"></i>
                </S.LinksContact>
              </div>
            </div>
          </S.ItensContact>
          <S.ItensContact data-aos="fade-right">
            <S.IconContact>
              <i className="bi bi-whatsapp" />
            </S.IconContact>
            <div>
              <div>
                <S.InfoName>Telefone:</S.InfoName>
              </div>
              <S.LinksContact
                href="https://wa.me/5521972038425"
                target="_blank"
                rel="noopener noreferrer"
              >
                (21) 97203-8425
              </S.LinksContact>
            </div>
          </S.ItensContact>
          <S.ItensContact data-aos="fade-right">
            <S.IconContact>
              <i className="bi bi-geo-alt-fill" />
            </S.IconContact>
            <div>
              <S.InfoName>Localização:</S.InfoName>
              <Text>RJ, Brasil</Text>
            </div>
          </S.ItensContact>
        </S.ListContact>
      </S.Content>
    </S.ContactConatiner>
  )
}

export default Contact
