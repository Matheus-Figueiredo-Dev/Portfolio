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
          <a href="https://drive.google.com/uc?export=download&id=1SCnLUV7S3pmIP0HlIaDyS589eUy97X6P">
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
