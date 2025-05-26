import { projetos } from './projetos';
import {
  Container,
  ContainerGrid,
  Content,
  Description,
  Image,
  Link,
  ProjectTitle,
  Title,
} from './styles';

export function Projetos() {
  return (
    <Container id="projetos">
      <Title>Meus Projetos</Title>
      <ContainerGrid>
        {projetos.map((projeto) => (
          <Content key={projeto.id}>
            <ProjectTitle>{projeto.title}</ProjectTitle>
            <Image
              src={projeto.image}
              alt={`Imagem do projeto ${projeto.title}`}
            />
            <Description>{projeto.description}</Description>
            <Link href={projeto.link}>Ver Projeto →</Link>
          </Content>
        ))}
      </ContainerGrid>
    </Container>
  );
}
