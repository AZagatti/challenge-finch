import React from 'react';

import loupeImg from '@assets/loupe.png';

import { Container } from './styles';

interface HeaderProps {
  subtitle: string;
  description: string;
}

const Header: React.FC<HeaderProps> = ({ subtitle, description }) => {
  return (
    <Container>
      <div className="header__group">
        <div>
          <h2 className="header__title">Empresa XPTO - </h2>
          <p className="header__subtitle">{subtitle}</p>
        </div>

        <div className="header__search">
          <img src={loupeImg} alt="search" />
          <input placeholder="Buscar" />
        </div>
      </div>

      <p className="header__description">{description}</p>
    </Container>
  );
};

export default Header;
