import styled from 'styled-components';

export const Main = styled.main`
    min-height: calc(100vh - 120px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 0 2rem;
    padding-top: 6rem;

    @media (max-width: 768px) {
        padding-top: 5rem;
        display: flex;
        align-items: center;
        flex-direction: column;
    }
`;

export const Title = styled.h1`
    font-size: 80px;
	line-height: 1.1;
	margin-bottom: 20px;
	letter-spacing: -2px;

    span {
        color: ${(props) => props.theme.lightPurple};
    }

    @media (max-width: 768px) {
       text-align: center;
    }
`;

export const SubTitle = styled.p`
    font-size: 20px;
	margin-bottom: 30px;
	max-width: 500px;
	color: ${(props) => props.theme.gray};

    @media (max-width: 768px) {
       text-align: center;
    }
`;
export const Link = styled.a`
    background-color: ${(props) => props.theme.purple};
    color: ${(props) => props.theme.white};
    padding: 0.8rem 1.5rem;
    border-radius: 8px;
    font-weight: bold;
    transition: background-color 0.3s ease;
    text-decoration: none;
    display: inline-block;
    transition: transform 0.8s ease;

  &:hover {
    background-color: ${(props) => props.theme.white};
    color: ${(props) => props.theme.purple};
    transform: translateY(-5px);
  }
`;
