import styled from 'styled-components';

export const Container = styled.div`
  padding: 4rem 2rem;
  background-color: ${(props) => props.theme.secondBlack};
  color: ${(props) => props.theme.white};
`;

export const Title = styled.h2`
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 2rem;
  text-align: center;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 4px;
    background-color: ${(props) => props.theme.purple};
    border-radius: 2px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
`;

export const FormContainer = styled.div`
  flex: 1;
  min-width: 300px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Input = styled.input`
  padding: 0.8rem;
  border: 1px solid ${(props) => props.theme.purple};
  border-radius: 4px;
`;

export const TextArea = styled.textarea`
  padding: 0.8rem;
  border: 1px solid ${(props) => props.theme.purple};
  border-radius: 4px;
  resize: vertical;
  min-height: 100px;
`;

export const Button = styled.button`
  background-color: ${(props) => props.theme.purple};
  color: ${(props) => props.theme.white};
  width: 100px;
  margin: 0 auto;
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  font-size: 16px;
  transition: background-color 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.darkPurple};
  }
`;

export const InfoContainer = styled.div`
  flex: 1;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  gap: 1rem;

    p {
    font-size: 20px;
    line-height: 1.5;
    margin-bottom: 1rem;
    color: ${(props) => props.theme.gray};
  }
`;

export const InfoItem = styled.div`
  display: flex;
  align-items: center;
`;

export const IconLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  font-size: 22px;
  font-weight: 500;
  color: ${(props) => props.theme.white};

  &:hover {
    color: ${(props) => props.theme.purple};
  }
`;
