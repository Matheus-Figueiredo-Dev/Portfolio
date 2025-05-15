import { Link, Main, SubTitle, Title } from './styles';

export function Home() {
  return (
    <Main>
      <Title>
        Olá, eu sou o <span>Matheus Figueiredo</span>!
      </Title>
      <SubTitle>
        Desenvolvedor web focado em soluções inteligentes e interfaces modernas
      </SubTitle>
      <Link href="#projetos">Ver projetos</Link>
    </Main>
  );
}
