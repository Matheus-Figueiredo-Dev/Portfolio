import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  flex-wrap: wrap;
  padding: 4rem 2rem;
  background-color: #f0f0f0;
  gap: 2rem;
`;

export const Title = styled.h1`
  font-size: 1.8rem;
  color: #4B0082;
  margin-bottom: 1rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  min-width: 200px;
`;

export const Link = styled.a`
  font-size: 1.1rem;
  color: #333;
  text-decoration: none;
  border: 2px solid transparent;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #4B0082;
    color: #fff;
    border-color: #4B0082;
  }
`;
