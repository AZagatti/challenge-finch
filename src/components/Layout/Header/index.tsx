import React from 'react';

import loupeImg from '@assets/loupe.png';
import returnImg from '@assets/return.png';

import { Container, HeaderWrapper } from './styles';

interface HeaderProps {
  productTitle?: {
    title: string;
    price: string;
    favorite: React.ReactNode;
  };
  subtitle?: string;
  description: string;
}

const Header: React.FC<HeaderProps> = ({
  subtitle,
  description,
  productTitle,
}) => {
  return (
    <Container>
      <div className="header__group">
        <HeaderWrapper>
          <div className="header__title-group">
            <h2 className="header__title">
              {productTitle ? productTitle.title : 'Empresa XPTO -'}
            </h2>
            <p className="header__title-price">{productTitle?.price}</p>
            {productTitle?.favorite}
          </div>
          <p className="header__subtitle">{subtitle}</p>
        </HeaderWrapper>

        <div className="header__search-wrapper">
          <button className="header__return" type="button">
            <img src={returnImg} alt="return" />
          </button>
          <div className="header__search">
            <img src={loupeImg} alt="search" />
            <input placeholder="Buscar" />
          </div>
        </div>
      </div>

      <p className="header__description">{description}</p>
    </Container>
  );
};

export default Header;
