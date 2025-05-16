import styled from 'styled-components';

export const Container = styled.div`
    padding: 60px 20px;
    margin-bottom: 150px;
    text-align: center;
`;

export const Title = styled.h2`
    font-size: 36px;
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
    width: 120px;
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
  height: 200px;

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
    transition: transform 0.3s, background-color 0.3s;
    
    &:hover {
        transform: translateY(-5px);
        background-color: ${(props) => props.theme.darkPurple};
    }
  }
`;
