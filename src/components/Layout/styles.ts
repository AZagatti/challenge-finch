import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div``;

export const Main = styled.main`
  padding: 5rem 15rem 5rem 15rem;

  @media (max-width: 900px) {
    padding: 2rem;
  }

  .layout__spinner-wrapper {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .layout__spinner {
      width: 10rem;
      height: 10rem;
      animation: ${rotate} 2s linear infinite;
    }
  }
`;
