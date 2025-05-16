import styled from 'styled-components';

export const Container = styled.div`
    padding: 60px 20px;
    text-align: center;
`;

export const Title = styled.h2`
    font-size: 48px;
    font-weight: bold;
    color: ${(props) => props.theme.white};
    position: relative;
    display: inline-block;

    &::after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: -8px;
    transform: translateX(-50%);
    width: 170px;
    height: 4px;
    background-color: ${(props) => props.theme.purple};
    border-radius: 2px;
    }
`;

export const ContainerGrid = styled.div`
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
  border: 1px solid ${(props) => props.theme.purple};
  border-radius: 16px;
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;
  max-width: 400px;
  width: 100%;

  &:hover {
    transform: translateY(-5px);
  }

`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

export const Description = styled.p`
  padding: 1rem;
  color: ${(props) => props.theme.gray};
  font-size: 1rem;

`;

export const Link = styled.a`
  display: block;
  text-align: center;
  padding: 1rem;
  font-weight: bold;
  color: ${(props) => props.theme.purple};
  background-color: ${(props) => props.theme.white};
  text-decoration: none;
  transition: background-color 0.3s;

  &:hover {
    color: ${(props) => props.theme.white};
    background-color: ${(props) => props.theme.purple};
  }
`;
