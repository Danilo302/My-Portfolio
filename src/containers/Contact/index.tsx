import { useState } from 'react'
import { Title, Text, Subtitle } from '../../styles'
import {
  ContactConatiner,
  Content,
  IconContact,
  InfoName,
  ItensContact,
  LinksContact,
  ListContact
} from './styles'

const Contact = () => {
  const email = 'danilofelix827@gmail.com'
  const [message, setMessage] = useState(false)

  const copiarEmail = () => {
    navigator.clipboard
      .writeText(email)
      .then(() => setMessage(true))
      .catch((err) => console.error('Falha ao copiar:', err))
  }

  return (
    <ContactConatiner>
      <Title>
        Entre em <span>Contato</span>
      </Title>
      <Text>
        Você tem um projeto em mente ou gostaria de bater um papo sobre alguma
        oportunidade? Adoraria saber mais!
      </Text>
      <Content>
        <Subtitle>Vamos conversar!</Subtitle>
        <Text>
          Tem alguma ideia ou projeto para discutir? Estou aqui para conversar e
          explorar oportunidades juntos!
        </Text>
        <ListContact>
          <ItensContact>
            <IconContact>
              <i className="bi bi-envelope" />{' '}
            </IconContact>
            <div>
              <InfoName>Email:</InfoName>
              <div>
                <LinksContact onClick={copiarEmail}>
                  danilofelix827@gmail.com <i className="bi bi-copy"></i>
                </LinksContact>
              </div>
            </div>
          </ItensContact>
          <ItensContact>
            <IconContact>
              <i className="bi bi-whatsapp" />
            </IconContact>
            <div>
              <div>
                <InfoName>Telefone:</InfoName>
              </div>
              <LinksContact
                href="https://wa.me/5521972038425"
                target="_blank"
                rel="noopener noreferrer"
              >
                (21) 97203-8425
              </LinksContact>
            </div>
          </ItensContact>
          <ItensContact>
            <IconContact>
              <i className="bi bi-geo-alt-fill" />
            </IconContact>
            <div>
              <InfoName>Localização:</InfoName>
              <Text>RJ, Brasil</Text>
            </div>
          </ItensContact>
        </ListContact>
      </Content>
    </ContactConatiner>
  )
}

export default Contact
