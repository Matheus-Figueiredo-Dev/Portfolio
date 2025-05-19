import styled from 'styled-components';

export const Container = styled.div`
    padding: 60px 20px;
    margin-bottom: 150px;
    text-align: center;
`;

export const Title = styled.h2`
    font-size: 48px;
    font-weight: bold;
    margin-bottom: 40px;
    color: ${(props) => props.theme.white};
    position: relative;
    display: inline-block;

    &::after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: -8px;
    transform: translateX(-50%);
    width: 150px;
    height: 4px;
    background-color: ${(props) => props.theme.purple};
    border-radius: 2px;
    }
`;

export const SkillsGrid = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  max-width: 900px;
  margin: 0 auto;

  span {
    background-color: ${(props) => props.theme.purple};
    color: ${(props) => props.theme.white};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    padding: 12px 20px;
    border-radius: 8px;
    font-weight: bold;
    font-size: 24px;
    transition: transform 0.8s ease;
    
    &:hover {
        transform: translateY(-5px);
        background-color: ${(props) => props.theme.white};
        color: ${(props) => props.theme.purple};
    }
  }
`;
