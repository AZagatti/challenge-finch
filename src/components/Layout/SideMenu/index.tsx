import React from 'react';
import { NavLink } from 'react-router-dom';

import codeImg from '@assets/code.png';
import suppliesImg from '@assets/supplies.png';
import boxImg from '@assets/box.png';
import giftBoxImg from '@assets/gift-box.png';
import recommendedImg from '@assets/recommended.png';

import { Container, Dismiss } from './styles';

interface SideMenuProps {
  showMenu: boolean;
  toggleMenu(): void;
}

const SideMenu: React.FC<SideMenuProps> = ({ showMenu, toggleMenu }) => {
  return (
    <>
      <Container showMenu={showMenu}>
        <NavLink to="/" activeClassName="sidemenu__selected">
          <img className="sidemenu__logo" src={codeImg} alt="code" />
        </NavLink>
        <NavLink exact to="/" activeClassName="sidemenu__selected">
          <img src={suppliesImg} alt="all" />
          <p>Todos</p>
        </NavLink>
        <NavLink to="/exclusives" activeClassName="sidemenu__selected">
          <img src={boxImg} alt="exclusives" />
          <p>Exclusivos</p>
        </NavLink>
        <NavLink to="/promotions" activeClassName="sidemenu__selected">
          <img src={giftBoxImg} alt="promotions" />
          <p>Promoção</p>
        </NavLink>
        <NavLink to="/favorites" activeClassName="sidemenu__selected">
          <img src={recommendedImg} alt="favorites" />
          <p>Favoritos</p>
        </NavLink>
      </Container>
      <Dismiss onClick={toggleMenu} showMenu={showMenu} />
    </>
  );
};

export default SideMenu;
