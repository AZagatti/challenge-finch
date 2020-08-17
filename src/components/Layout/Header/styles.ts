import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  padding: 5rem 15rem 0 15rem;

  &:after {
    content: '';
    display: block;
    margin-top: 5rem;
    height: 1px;
    width: 100%;
    background: rgba(0, 0, 0, 0.25);
  }

  .header__menu-icon-button {
    display: none;
  }

  .header__group {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.5rem;
  }

  .header__title {
    font-size: 2rem;
    display: inline;
  }

  .header__description {
    font-size: 1.4rem;
    color: #8e879e;
  }

  .header__search-wrapper {
    display: flex;
    align-items: center;

    .header__return {
      border: 0;
      outline: 0;
      background: transparent;
      margin-right: 2rem;
      display: flex;
      height: 3.5rem;

      &:after {
        content: '';
        display: block;
        margin-left: 2rem;

        width: 1px;
        height: 100%;
        background: rgba(0, 0, 0, 0.25);
      }
    }

    .header__search {
      display: flex;
      align-items: center;
      background-color: #fff;

      box-shadow: 0px 3px 6px #2959b729;
      border-radius: 90px;
      padding: 1.2rem;

      img {
        width: 2.4rem;
        height: 2.4rem;
      }

      input {
        border: 0;
        border-left: 0.5px solid rgba(0, 0, 0, 0.3);
        margin-left: 1rem;
        height: 2.4rem;
        padding: 0.5rem;
        width: 30rem;
      }
    }
  }

  @media (max-width: 900px) {
    position: relative;
    padding: 0;
    padding: 2rem;
    text-align: center;

    .header__menu-icon-button {
      display: block;
      border: 0;
      outline: 0;
      background: transparent;

      .header__menu-icon {
        position: absolute;
        top: 1rem;
        left: 1rem;
        width: 2rem;
        height: 2rem;
      }
    }

    .header__group {
      justify-content: center;
      flex-direction: column;
    }

    .header__search-wrapper {
      margin: 2rem;

      .header__search {
        input {
          width: 20rem;
        }
      }
    }
  }
`;

export const HeaderWrapper = styled.div`
  display: flex;

  .header__subtitle {
    font-size: 1.8rem;
    margin-left: 0.5rem;
    display: inline;
  }

  .header__title-group {
    display: flex;
    align-items: center;
    justify-content: center;

    .header__title-price {
      margin: 0 1rem;
      font-size: 1.8rem;
      font-weight: bold;
      color: #5e3ba5;
    }

    .header__favorite {
      display: flex;
      align-items: center;
      color: #8e879e;
      font-size: 1.2rem;

      .header__switch {
        position: relative;
        display: inline-block;
        width: 2.5rem;
        height: 1rem;
        background-color: #a4a5bc;
        border-radius: 1rem;
        margin-right: 1rem;
        cursor: pointer;

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
      .header__checkbox:checked + .header__switch {
        background-color: #0186f8;

        &::after {
          left: 0.2rem;
        }
      }
      .header__checkbox {
        display: none;
      }
    }
  }

  @media (max-width: 900px) {
    flex-direction: column;

    .header__title-group {
      flex-direction: column;
    }
  }
`;
