import foto from '../../assets/foto.png';
import {
  Container,
  ContainerImage,
  Content,
  Description,
  Image,
  SubTitle,
  Title,
} from './styles';

export function Sobre() {
  return (
    <Container>
      <Content>
        <Title>Quem Sou Eu?</Title>
        <SubTitle>
          Desenvolvedor com paixão por criar soluções digitais
        </SubTitle>
        <Description>
          Olá! Meu nome é Matheus Figueiredo, sou um desenvolvedor web em
          transição de carreira, vindo da área de suporte técnico. Sempre fui
          apaixonado por tecnologia e, nos últimos tempos, descobri na
          programação uma forma de unir criatividade com lógica para construir
          soluções úteis e funcionais. Gosto de escrever código limpo, valorizo
          a organização e me esforço para entregar interfaces responsivas, com
          boa usabilidade e uma ótima experiência para o usuário.
        </Description>
        <Description>
          Tenho facilidade em trabalhar em equipe, sou curioso, dedicado e
          sempre busco aprender algo novo com cada desafio. Meu objetivo é
          ingressar na área de desenvolvimento, contribuir com projetos reais e
          crescer junto com profissionais que compartilham da mesma vontade de
          evoluir. Acredito que a tecnologia tem o poder de transformar vidas, e
          quero fazer parte disso, usando minhas habilidades para ajudar pessoas
          e resolver problemas de forma criativa e eficiente.
        </Description>
      </Content>

      <ContainerImage>
        <Image src={foto} alt="Foto do Matheus Figueiredo" />
      </ContainerImage>
    </Container>
  );
}
