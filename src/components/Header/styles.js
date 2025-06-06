import styled from 'styled-components';

export const HeaderContainer = styled.header`
    padding: 1rem 2rem;
    font-size: 25px;
    display: flex;
    justify-content: center;
    border-bottom: 1px solid ${(props) => props.theme.purple};
    background-color: ${(props) => props.theme.secondBlack};
    width: 100%;
    position: fixed;
    z-index: 99;

    @media (max-width: 768px) {
        display: none;
  }
`;

export const Nav = styled.nav`
    width: 100%;
    max-width: 1200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Menu = styled.ul`
    list-style: none;
    display: flex;
    gap: 2rem;
    justify-content: flex start;
`;

export const ContainerMenu = styled.div`
    list-style: none;
    display: flex;
    gap: 2rem;
    justify-content: flex end;

    @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    padding: 0;
  }
`;

export const MenuItem = styled.a`
    cursor: pointer;
    font-weight: bold;
    color: ${(props) => props.theme.white};
    text-decoration: none;
    transition: transform 0.8s ease;

   &:hover {
		color: ${(props) => props.theme.purple};
		transform: translateY(-5px);
	}
`;

export const Button = styled.button`
    background-color: ${(props) => props.theme.purple};
    color: ${(props) => props.theme.white};
    padding: 0.8rem 1.5rem;
    border: none;
    border-radius: 8px;
    font-weight: bold;
    font-size: 16px;
    text-decoration: none;
    height: 48px;
    transition: background-color 0.3s ease;
    transition: transform 0.8s ease;
    cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.darkPurple};
    transform: translateY(-5px);
  }
`;

export const Link = styled.a`
    font-size: 40px;
    transition: transform 0.8s ease;
    color: ${(props) => props.theme.white};

   &:hover {
    transform: translateY(-5px);
    color: ${(props) => props.theme.purple};
  }
`;
