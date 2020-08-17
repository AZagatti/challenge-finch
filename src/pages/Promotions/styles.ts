import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(35rem, 35rem));
  grid-gap: 5rem;
  grid-template-rows: auto;
  grid-auto-flow: row;

  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
