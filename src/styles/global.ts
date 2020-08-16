import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    -webkit-font-smoothing: antialiased;
    background-color: #F1F3F3;
  }

  button {
    cursor: pointer;
  }

  body,
  input,
  button,
  textarea {
    font-family: Manrope;
  }

  :root {
    font-size: 60%;
  }

  @media (min-width: 700px) {
    :root {
      font-size: 62.5%;
    }
  }
`;
