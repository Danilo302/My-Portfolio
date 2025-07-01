import styled from 'styled-components'

export const Container = styled.nav`
  width: 100%;
  height: 60px;
  background-color: color-mix(
    in srgb,
    ${(props) => props.theme.corDeFundo},
    transparent 20%
  );
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 2rem;
  position: fixed;
  top: 0;
  z-index: 100;
`
export const NavBarContent = styled.div`
  width: 1200px;
  display: flex;
  justify-content: space-between;
`

export const Logo = styled.h1`
  color: ${(props) => props.theme.corQuartenaria};
  font-size: 24px;
  font-family: 'Playfair Display', serif;
  padding-left: 24px;
`

export const NavLinks = styled.div`
  display: flex;
  gap: 24px;

  @media (max-width: 768px) {
    display: none;
  }
`

export const NavLinkItem = styled.a`
  color: ${(props) => props.theme.corSecundaria};
  font-weight: bold;
  text-decoration: none;
  font-size: 16px;
  position: relative;
  transition: color 0.3s ease;

  &:hover {
    color: ${(props) => props.theme.corTerciaria};
  }

  &::after {
    content: '';
    position: absolute;
    width: 0%;
    height: 2px;
    background: ${(props) => props.theme.corTerciaria};
    left: 0;
    bottom: -4px;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`
export const IconTheme = styled.i`
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.corTerciaria};
  }
`

export const Hamburger = styled.div`
  display: none;
  cursor: pointer;
  width: 32px;

  i {
    color: ${(props) => props.theme.corSecundaria};
    font-size: 24px;
  }

  div {
    padding-right: 8px;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`

export const MobileMenu = styled.div<{ open: boolean }>`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    background-color: ${(props) => props.theme.corDeFundo};
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    padding: 1.5rem;
    transform: ${({ open }) => (open ? 'translateY(0)' : 'translateY(-100%)')};
    opacity: ${({ open }) => (open ? 1 : 0)};
    transition: all 0.3s ease;
  }
`
