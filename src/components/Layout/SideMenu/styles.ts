import styled from 'styled-components';

export const Container = styled.aside`
  height: 100%;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 50px #00000029;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 12rem;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    padding: 0 1rem;

    img {
      width: 4.5rem;
      height: 4.5rem;
      margin: 1.5rem 0;

      & + p {
        margin-top: -1rem;
      }
    }

    p {
      font-size: 1.6rem;
      margin: 2rem 0 1.5rem 0;
    }

    & + div:before {
      content: '';
      display: block;
      margin: auto;
      height: 1px;
      width: 100%;
      background: rgba(0, 0, 0, 0.25);
    }
  }
`;
