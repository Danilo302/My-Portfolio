import { useState } from 'react'

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
    <section>
      <h1>
        Entre em <span>Contato</span>
      </h1>
      <p>
        Você tem um projeto em mente ou gostaria de bater um papo sobre alguma
        oportunidade? Adoraria saber mais!
      </p>
      <div>
        <h3>Vamos conversar!</h3>
        <p>
          Tem alguma ideia ou projeto para discutir? Estou aqui para conversar e
          explorar oportunidades juntos!
        </p>
        <ul>
          <li>
            <div>
              <i className="bi bi-envelope" />{' '}
            </div>
            <div>
              <span>Email:</span>
              <div>
                <a onClick={copiarEmail}>danilofelix827@gmail.com</a>
                <p>{message ? '• copiado!' : ''}</p>
              </div>
            </div>
          </li>
          <li>
            <div>
              <i className="bi bi-whatsapp" />
            </div>
            <div>
              <span>Telefone:</span>
              <a href="">(21) 97203-8425</a>
            </div>
          </li>
          <li>
            <div>
              <i className="bi bi-geo-alt-fill" />
            </div>
            <div>
              <span>Localização:</span>
              <span>RJ, Brasil</span>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Contact
