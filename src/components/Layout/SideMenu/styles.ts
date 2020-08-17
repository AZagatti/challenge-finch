import styled from 'styled-components';

interface ContainerProps {
  showMenu: boolean;
}

export const Container = styled.aside<ContainerProps>`
  height: 100%;
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 50px #00000029;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 13rem;
  opacity: 1;
  transition: opacity 0.5s ease-in-out;

  .sidemenu__selected {
    opacity: 1;
  }

  a {
    opacity: 0.5;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    padding: 0 1rem;
    color: #3a3a3a;

    .sidemenu__logo {
      width: 5.7rem;
      height: 5.7rem;
    }

    img {
      width: 4.8rem;
      height: 4.8rem;
      margin: 2.5rem 0;

      & + p {
        margin-top: -1.1rem;
      }
    }

    p {
      font-size: 1.6rem;
      margin: 2rem 0 2.5rem 0;
    }

    & + a:before {
      content: '';
      display: block;
      margin: auto;
      height: 1px;
      width: 100%;
      background: rgba(0, 0, 0, 0.25);
    }
  }

  @media (max-width: 900px) {
    opacity: ${({ showMenu }) => (showMenu ? 1 : 0)};
    pointer-events: ${({ showMenu }) => (showMenu ? 'all' : 'none')};
  }
`;

export const Dismiss = styled.div<ContainerProps>`
  display: none;
  z-index: 1;

  @media (max-width: 900px) {
    display: ${({ showMenu }) => (showMenu ? 'block' : 'none')};

    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.3);
  }
`;
