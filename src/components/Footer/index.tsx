import { Subtitle } from '../../styles'
import { FooterContainer, LinkName, LinksIcon, TextFooter } from './styles'

const Footer = () => {
  return (
    <FooterContainer>
      <Subtitle>Danilo Felix</Subtitle>
      <div>
        <LinksIcon href="#">
          <i className="bi bi-instagram" />
        </LinksIcon>
        <LinksIcon href="#">
          <i className="bi bi-linkedin" />
        </LinksIcon>
        <LinksIcon href="#">
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
