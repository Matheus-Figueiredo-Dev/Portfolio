import styled from 'styled-components';

export const Container = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 4rem 2rem;
    gap: 4rem;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const Content = styled.div`
    flex: 1;
`;

export const Title = styled.h2`
    font-size: 36px;
    margin-bottom: 1rem;
`;

export const SubTitle = styled.h3`
    font-size: 20px;
    margin-bottom: 2rem;
    color: #666;
`;
export const Description = styled.p`
    font-size: 18px;
    margin-bottom: 1.5rem;
    line-height: 1.6;
    color: #444;
`;

export const Button = styled.button`
    background-color: #4B0082;
    color: white;
    padding: 0.8rem 1.5rem;
    border: none;
    border-radius: 8px;
    font-weight: bold;
    font-size: 16px;
    transition: background-color 0.3s ease;
    transition: transform 0.8s ease;

  &:hover {
    background-color:rgb(30, 3, 49);
    transform: translateY(-5px);
  }
`;

export const ContainerImage = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
`;

export const Image = styled.img`
    width: 100%;
    max-width: 350px;
    border-radius: 50%;
    object-fit: cover;
    animation: float 3s ease-in-out infinite;

    @keyframes float {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-15px);
    }
    100% {
      transform: translateY(0px);
    }
  }
`;
