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

  .header__subtitle {
    font-size: 1.8rem;
    margin-left: 0.5rem;
    display: inline;
  }

  .header__description {
    font-size: 1.4rem;
    color: #8e879e;
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
`;
