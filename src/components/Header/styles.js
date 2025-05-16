import styled from 'styled-components';

export const HeaderContainer = styled.header`
    padding: 1rem 2rem;
    font-size: 25px;
    display: flex;
    justify-content: center;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    border-bottom: 1px solid ${(props) => props.theme.purple};
    background-color: ${(props) => props.theme.secondBlack};
    width: 100%;
    position: fixed;
    z-index: 99;
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
    transition: background-color 0.3s ease;
    transition: transform 0.8s ease;

  &:hover {
    background-color: ${(props) => props.theme.darkPurple};
    transform: translateY(-5px);
  }
`;

export const Link = styled.a`
    font-size: 40px;
    transition: transform 0.8s ease;

   &:hover {
    transform: translateY(-5px);
    color: ${(props) => props.theme.darkPurple};
  }
`;
