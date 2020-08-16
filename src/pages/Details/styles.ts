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
      height: 30rem;
      margin-right: 3rem;

      img {
        width: 35rem;
        height: 30rem;
        object-fit: cover;
        border-radius: 3px 3px 0 0;
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

    .details__description {
      margin-top: 3rem;
      font-size: 1.4rem;
      line-height: 2.2rem;
      color: #8e879e;
    }
  }

  .details__footer {
    margin-top: 2rem;

    > h2 {
      &:after {
        content: '';
        display: block;
        width: 100%;
        height: 1px;
        margin-top: 2rem;
        background-color: rgba(0, 0, 0, 0.25);
      }
    }
    .details__datasheet {
      margin-top: 2rem;

      ul {
        padding: 0 2rem;
        display: grid;
        justify-content: space-around;
        grid-template-columns: repeat(auto-fit, minmax(20rem, 30rem));
        grid-row-gap: 1rem;
        grid-template-rows: auto;
        grid-auto-flow: row;

        li {
          font-size: 1.4rem;
          color: #8e879e;
        }
      }
    }
  }
`;
