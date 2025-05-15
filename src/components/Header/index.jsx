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
          <MenuItem>Home</MenuItem>
          <MenuItem>Sobre</MenuItem>
          <MenuItem>Habilidades</MenuItem>
          <MenuItem>Projetos</MenuItem>
          <MenuItem>Contato</MenuItem>
        </Menu>
        <ContainerMenu>
          <a href="/Matheus Figueiredo - Desenvolvedor Full Stack.pdf" download>
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
