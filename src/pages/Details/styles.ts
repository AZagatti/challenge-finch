import styled from 'styled-components';

export const Container = styled.div`
  .details__informations {
    display: flex;
  }

  .details__title {
    font-size: 2rem;
    font-weight: bold;
  }

  .details__informations {
    .details__description {
      font-size: 1.6rem;
    }

    .details__header {
      position: relative;
      height: 35rem;

      img {
        width: 40rem;
        height: 35rem;
        object-fit: cover;
      }

      .details__type {
        position: absolute;
        bottom: 0;
        right: 0;
        padding: 0.5rem;
        width: 15rem;
        background: transparent
          linear-gradient(125deg, #ef0e5a 0%, #55118f 100%) 0% 0% no-repeat
          padding-box;

        color: #fff;
        text-align: center;
        font-size: 1.6rem;
      }
    }
  }
`;
