import styled from 'styled-components';

export const Main = styled.main`
    min-height: calc(100vh - 120px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 0 2rem;
`;

export const Title = styled.h1`
    font-size: 80px;
	line-height: 1.1;
	margin-bottom: 20px;
	letter-spacing: -2px;

    span {
        color: #4B0082;
    }
`;

export const SubTitle = styled.p`
    font-size: 20px;
	margin-bottom: 30px;
	max-width: 500px;
	color: #bbb;
`;
export const Link = styled.a`
    background-color: #4B0082;
    color: white;
    padding: 0.8rem 1.5rem;
    border-radius: 8px;
    font-weight: bold;
    transition: background-color 0.3s ease;
    text-decoration: none;
    display: inline-block;
    transition: transform 0.8s ease;

  &:hover {
    background-color:rgb(30, 3, 49);
    transform: translateY(-5px);
  }
`;
