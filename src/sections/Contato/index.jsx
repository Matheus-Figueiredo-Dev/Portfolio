import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import {
  Button,
  Container,
  Content,
  Form,
  FormContainer,
  IconLink,
  InfoContainer,
  InfoItem,
  Input,
  TextArea,
  Title,
} from './styles';

export function Contato() {
  return (
    <Container id="contato">
      <Title>Contato</Title>
      <Content>
        <FormContainer>
          <Form
            action="https://formcarry.com/s/afAFAgVS43Q"
            method="POST"
            encType="multipart/form-data"
          >
            <Input
              type="text"
              placeholder="Digite seu nome"
              required
              name="nome"
            />
            <Input
              type="email"
              placeholder="Digite seu e-mail"
              required
              name="email"
            />
            <TextArea
              placeholder="Escreva sua mensagem"
              required
              name="mensagem"
            />
            <Button type="submit">Enviar</Button>
          </Form>
        </FormContainer>
        <InfoContainer>
          <p>
            Quer bater um papo ou tirar dúvidas? Fique à vontade para entrar em
            contato por qualquer um desses canais!
          </p>
          <InfoItem>
            <IconLink href="https://wa.me/5511913256019?text=Ol%C3%A1!%20Acessei%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar%20sobre%20uma%20poss%C3%ADvel%20colabora%C3%A7%C3%A3o%20ou%20projeto%20freelancer.%20Podemos%20trocar%20uma%20ideia%3F">
              <FaWhatsapp size={30} /> WhatsApp
            </IconLink>
          </InfoItem>
          <InfoItem>
            <IconLink href="https://www.linkedin.com/in/matheus-figueiredo-santos/">
              <FaLinkedin size={30} /> LinkedIn
            </IconLink>
          </InfoItem>
          <InfoItem>
            <IconLink href="https://github.com/Matheus-Figueiredo-Dev">
              <FaGithub size={30} /> GitHub
            </IconLink>
          </InfoItem>
        </InfoContainer>
      </Content>
    </Container>
  );
}
