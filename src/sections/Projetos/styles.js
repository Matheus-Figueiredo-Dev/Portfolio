import styled from 'styled-components';

export const Container = styled.div`
  padding: 4rem 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  justify-items: center;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: transparent;
  border: 1px solid #4B0082;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  max-width: 400px;
  width: 100%;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0,0,0,0.15);
  }

`;
export const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;
export const Description = styled.p`
  padding: 1rem;
  color: #555;
  font-size: 1rem;

`;
export const Link = styled.a`
  display: block;
  text-align: center;
  padding: 1rem;
  font-weight: bold;
  color: #4B0082;
  background-color: #f5f5f5;
  text-decoration: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e6e6e6;
  }
`;
