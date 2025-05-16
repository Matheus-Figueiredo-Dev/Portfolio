import {
  FaCss3,
  FaGitAlt,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
} from 'react-icons/fa';
import {
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiTypescript,
} from 'react-icons/si';
import { Container, SkillsGrid, Title } from './styles';

export function Habilidades() {
  return (
    <Container>
      <Title>Habilidades</Title>
      <SkillsGrid>
        <span>
          <FaHtml5 size={70} /> HTML
        </span>
        <span>
          <FaCss3 size={70} /> CSS
        </span>
        <span>
          <FaJs size={70} /> JavaScript
        </span>
        <span>
          <FaGitAlt size={70} /> Git
        </span>
        <span>
          <FaReact size={70} /> React
        </span>
        <span>
          <FaNodeJs size={70} /> Node.js
        </span>
        <span>
          <SiTypescript size={70} /> TypeScript
        </span>
        <span>
          <SiMongodb size={70} /> MongoDB
        </span>
        <span>
          <SiPrisma size={70} /> Prisma
        </span>
        <span>
          <SiPostgresql size={70} /> PostgreSQL
        </span>
      </SkillsGrid>
    </Container>
  );
}
