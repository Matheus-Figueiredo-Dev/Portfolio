import styled from 'styled-components';

export const Container = styled.div`
    padding: 60px 20px;
    text-align: center;

  span {
    background-color: #4B0082;
    color: #fff;
    padding: 12px 20px;
    border-radius: 8px;
    font-weight: bold;
    font-size: 16px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s, background-color 0.3s;
    
    &:hover {
        transform: translateY(-5px);
        background-color:rgb(30, 3, 49);
        cursor: pointer;
    }
  }
`;

export const Title = styled.h1`
    font-size: 36px;
    margin-bottom: 40px;
    color: #333;
`;

export const SkillsGrid = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  max-width: 900px;
  margin: 0 auto;
`;
