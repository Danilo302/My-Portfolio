import { Subtitle } from '../../styles'
import { FooterContainer, LinkName, LinksIcon, TextFooter } from './styles'

const Footer = () => {
  return (
    <FooterContainer>
      <Subtitle>Danilo Felix</Subtitle>
      <div>
        <LinksIcon
          href="https://www.instagram.com/danilofx_m/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bi bi-instagram" />
        </LinksIcon>
        <LinksIcon href="https://www.linkedin.com/in/danilo-felix-75639524b/">
          <i className="bi bi-linkedin" />
        </LinksIcon>
        <LinksIcon href="https://github.com/Danilo302">
          <i className="bi bi-github" />
        </LinksIcon>
      </div>

      <TextFooter>
        <i className="bi bi-code-square" />
        <p>
          Desenvolvido por <LinkName>Danilo Felix</LinkName>
        </p>
        <i className="bi bi-lightbulb" />
      </TextFooter>
    </FooterContainer>
  )
}

export default Footer
