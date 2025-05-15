import { projetos } from './projetos';
import { Container, Content, Description, Image, Link } from './styles';

export function Projetos() {
  return (
    <Container>
      {projetos.map((projeto) => (
        <Content key={projeto.id}>
          <Image
            src={projeto.image}
            alt={`Imagem do projeto ${projeto.title}`}
          />
          <Description>{projeto.description}</Description>
          <Link href={projeto.link}>Ver Projeto →</Link>
        </Content>
      ))}
    </Container>
  );
}
