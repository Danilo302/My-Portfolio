import React, { useState } from 'react'
import {
  Container,
  Logo,
  NavLinks,
  NavLinkItem,
  Hamburger,
  MobileMenu,
  NavBarContent,
  IconTheme
} from './styles'

type Props = {
  changeTheme: () => void
}

const Navbar = (props: Props) => {
  const [ligth, setLigth] = useState(false)
  const [open, setOpen] = useState(false)

  function theme() {
    props.changeTheme()
    setLigth(ligth ? false : true)
  }

  const toggleMenu = () => setOpen(!open)
  return (
    <Container>
      <NavBarContent>
        <Logo>Danilo Felix</Logo>

        <IconTheme
          className={ligth ? 'bi bi-moon-fill' : 'bi bi-brightness-high-fill'}
          onClick={theme}
        />
        <Hamburger>
          <i
            className={`bi ${open ? 'bi-x-lg' : 'bi-list'}`}
            style={{ fontSize: '28px', color: 'white' }}
            onClick={toggleMenu}
          ></i>
        </Hamburger>

        <NavLinks>
          <NavLinkItem href="#home">Home</NavLinkItem>
          <NavLinkItem href="#sobre">Sobre mim</NavLinkItem>
          <NavLinkItem href="#projetos">Projetos</NavLinkItem>
          <NavLinkItem href="#skills">Skills</NavLinkItem>
          <NavLinkItem href="#contato">Contato</NavLinkItem>
          <IconTheme
            className={ligth ? 'bi bi-moon-fill' : 'bi bi-brightness-high-fill'}
            onClick={theme}
          />
        </NavLinks>

        {open && (
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
        )}
      </NavBarContent>
    </Container>
  )
}

export default Navbar
