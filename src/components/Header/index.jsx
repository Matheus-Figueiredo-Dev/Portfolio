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
          <Button
            as="a"
            href="/Matheus-Figueiredo-Desenvolvedor-Full-Stack.pdf"
            download
          >
            Download CV
          </Button>
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
