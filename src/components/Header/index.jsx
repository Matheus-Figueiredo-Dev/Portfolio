import { HeaderContainer, Menu, MenuItem, Nav } from './styles';

export function Header() {
  return (
    <HeaderContainer>
      <Nav>
        <Menu>
          <MenuItem>Home</MenuItem>
          <MenuItem>Sobre</MenuItem>
          <MenuItem>Habilidades</MenuItem>
          <MenuItem>Projetos</MenuItem>
          <MenuItem>Contato</MenuItem>
        </Menu>
      </Nav>
    </HeaderContainer>
  );
}
