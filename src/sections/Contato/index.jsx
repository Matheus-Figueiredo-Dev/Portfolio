import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { Container, Content, Link, Title } from './styles';

export function Contato() {
  return (
    <Container>
      <Content>
        <Title>Contato</Title>
        <Link href="https://wa.me/5511913256019?text=Ol%C3%A1!%20Acessei%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar%20sobre%20uma%20poss%C3%ADvel%20colabora%C3%A7%C3%A3o%20ou%20projeto%20freelancer.%20Podemos%20trocar%20uma%20ideia%3F">
          <FaWhatsapp /> WhatsApp
        </Link>
        <Link href="mailto:figueiredom924@gmail.com">
          <FaEnvelope /> Email
        </Link>
      </Content>
      <Content>
        <Title>Redes Sociais</Title>
        <Link href="https://www.linkedin.com/in/matheus-figueiredo-santos/">
          <FaLinkedin /> LinkedIn
        </Link>
        <Link href="https://github.com/Matheus-Figueiredo-Dev">
          <FaGithub /> GitHub
        </Link>
      </Content>
    </Container>
  );
}
