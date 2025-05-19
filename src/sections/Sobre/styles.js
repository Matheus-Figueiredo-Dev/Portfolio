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
    font-size: 48px;
    font-weight: bold;
    margin-bottom: 3rem;
    position: relative;

    &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -8px;
    width: 150px;
    height: 4px;
    background-color: ${(props) => props.theme.purple};
    border-radius: 2px;
    }

    @media (max-width: 768px) {
      &::after {
        left: 50%;
        transform: translateX(-50%);
        }
    }
`;

export const SubTitle = styled.h3`
    font-size: 20px;
    margin-bottom: 2rem;
    color: ${(props) => props.theme.white};
`;
export const Description = styled.p`
    font-size: 18px;
    margin-bottom: 1.5rem;
    line-height: 1.6;
    color: ${(props) => props.theme.gray};
`;

export const ContainerImage = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    position: relative;

    &::before {
    content: "";
    position: absolute;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(75,0,130,0.4), transparent);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 0;
  }
`;

export const Image = styled.img`
  width: 100%;
  max-width: 350px;
  border-radius: 45%;
  object-fit: cover;
  animation: float 3s ease-in-out infinite;
  box-shadow: 0 0 30px rgba(75, 0, 130, 0.5);
  border: 4px solid ${(props) => props.theme.purple};

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
