import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 2rem 1rem;
  background-color: ${(props) => props.theme.secondBlack};
  color: ${(props) => props.theme.white};
  text-align: center;
  font-size: 0.9rem;
  border-top: 1px solid ${(props) => props.theme.purple};
  margin-top: 4rem;

  p {
    margin: 0;
  }
`;
