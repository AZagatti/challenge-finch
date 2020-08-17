import styled, { css } from 'styled-components';

interface ContainerProps {
  exclusive?: boolean;
  promotion?: boolean;
}

export const Container = styled.div<ContainerProps>`
  cursor: pointer;
  background-color: #fff;
  width: 35rem;
  box-shadow: 0px 10px 20px #16319b29;
  border-radius: 0.3rem;

  .card__navigate-button {
    outline: 0;
    border: 0;
    background: transparent;
    text-align: left;
  }

  .card__header {
    position: relative;
    height: 20rem;

    .card__type {
      position: absolute;
      bottom: 0;
      right: 0;
      padding: 0.5rem;
      width: 15rem;
      color: #fff;
      text-align: center;
      font-size: 1.4rem;

      ${({ exclusive }) =>
        exclusive &&
        css`
          background: transparent
            linear-gradient(125deg, #1db6ce 0%, #182ac9 100%) 0% 0% no-repeat
            padding-box;
        `}
      ${({ promotion }) =>
        promotion &&
        css`
          background: transparent
            linear-gradient(125deg, #ef0e5a 0%, #55118f 100%) 0% 0% no-repeat
            padding-box;
        `}
    }

    img {
      height: 20rem;
      object-fit: cover;
      width: 35rem;
      border-top-left-radius: 0.3rem;
      border-top-right-radius: 0.3rem;
    }
  }

  .card__main {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;
    padding: 1.5rem 2rem;

    .card__price {
      font-size: 1.8rem;
      color: #5e3ba5;
      font-weight: bold;
    }

    .card__favorite {
      display: flex;
      align-items: center;
      color: #8e879e;
      font-size: 1.2rem;

      .card__switch {
        position: relative;
        display: inline-block;
        cursor: pointer;
        width: 2.5rem;
        height: 1rem;
        border-radius: 1rem;
        margin-right: 1rem;

        background-color: #a4a5bc;

        &::after {
          content: '';
          position: absolute;
          width: 0.7rem;
          height: 0.7rem;
          border-radius: 50%;
          background-color: white;
          top: 0.15rem;
          transition: all 0.3s;
          left: 1.6rem;
        }
      }
      .card__checkbox:checked + .card__switch {
        background-color: #0186f8;
        &::after {
          left: 0.2rem;
        }
      }
      .card__checkbox {
        display: none;
      }
    }
  }

  .card__footer {
    background-color: #fff;
    padding: 0 1.5rem 2rem 2rem;
    border-bottom-left-radius: 0.3rem;
    border-bottom-right-radius: 0.3rem;

    .card__title {
      font-weight: bold;
      font-size: 2rem;
    }

    .card__description {
      font-size: 1.4rem;
      color: #8e879e;
      margin-top: 1.5rem;
    }
  }

  @media (max-width: 900px) {
    width: 30rem;

    .card__header {
      img {
        width: 100%;
      }
    }
  }
`;
