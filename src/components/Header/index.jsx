import { FaGithub, FaLinkedin } from 'react-icons/fa';
import {
  Button,
  ContainerMenu,
  HeaderContainer,
  Link,
  Menu,
  MenuItem,
  Nav,
} from './styles';

export function Header() {
  return (
    <HeaderContainer>
      <Nav>
        <Menu>
          <MenuItem href="#home">Home</MenuItem>
          <MenuItem href="#sobre">Sobre</MenuItem>
          <MenuItem href="#habilidades">Habilidades</MenuItem>
          <MenuItem href="#projetos">Projetos</MenuItem>
          <MenuItem href="#contato">Contato</MenuItem>
        </Menu>
        <ContainerMenu>
          <a href="/curriculo.pdf" download>
            <Button>Download CV</Button>
          </a>
          <Link href="https://github.com/Matheus-Figueiredo-Dev">
            <FaGithub />
          </Link>
          <Link href="https://www.linkedin.com/in/matheus-figueiredo-santos/">
            <FaLinkedin />
          </Link>
        </ContainerMenu>
      </Nav>
    </HeaderContainer>
  );
}
