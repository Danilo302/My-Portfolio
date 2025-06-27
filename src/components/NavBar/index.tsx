import React, { useState } from 'react'
import {
  Container,
  Logo,
  NavLinks,
  NavLinkItem,
  Hamburger,
  MobileMenu,
  NavBarContent
} from './styles'

const Navbar = () => {
  const [ligth, setLigth] = useState(false)
  const [open, setOpen] = useState(false)

  const toggleMenu = () => setOpen(!open)
  return (
    <Container>
      <NavBarContent>
        <Logo>Danilo Felix</Logo>

        <Hamburger onClick={toggleMenu}>
          <i
            className={`bi ${open ? 'bi-x-lg' : 'bi-list'}`}
            style={{ fontSize: '28px', color: 'white' }}
          ></i>
        </Hamburger>

        <NavLinks>
          <NavLinkItem href="#home">Home</NavLinkItem>
          <NavLinkItem href="#sobre">Sobre mim</NavLinkItem>
          <NavLinkItem href="#projetos">Projetos</NavLinkItem>
          <NavLinkItem href="#skills">Skills</NavLinkItem>
          <NavLinkItem href="#contato">Contato</NavLinkItem>
          <i
            className={ligth ? 'bi bi-moon-fill' : 'bi bi-brightness-high-fill'}
            onClick={() => setLigth(ligth ? false : true)}
          />
        </NavLinks>

        <MobileMenu open={open}>
          <NavLinkItem href="#home" onClick={toggleMenu}>
            Home
          </NavLinkItem>
          <NavLinkItem href="#sobre" onClick={toggleMenu}>
            Sobre mim
          </NavLinkItem>
          <NavLinkItem href="#projetos" onClick={toggleMenu}>
            Projetos
          </NavLinkItem>
          <NavLinkItem href="#skills" onClick={toggleMenu}>
            Skills
          </NavLinkItem>
          <NavLinkItem href="#contato" onClick={toggleMenu}>
            Contato
          </NavLinkItem>
        </MobileMenu>
      </NavBarContent>
    </Container>
  )
}

export default Navbar
