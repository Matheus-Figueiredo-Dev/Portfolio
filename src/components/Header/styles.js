import styled from 'styled-components';

export const HeaderContainer = styled.header`
    padding: 1rem 2rem;
    font-size: 25px;
    display: flex;
    justify-content: center;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

export const Nav = styled.nav`
    width: 100%;
    max-width: 1200px;
`;

export const Menu = styled.ul`
    list-style: none;
    display: flex;
    gap: 2rem;
    justify-content: center;
`;

export const MenuItem = styled.li`
    cursor: pointer;
    font-weight: bold;
    color: #333;
    transition: transform 0.8s ease;

   &:hover {
		color: #4B0082;
		transform: translateY(-5px);
	}
`;
