import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import loupeImg from '@assets/loupe.png';
import returnImg from '@assets/return.png';
import menuImg from '@assets/menu.png';

import useDebounce from '@hooks/useDebounce';
import useProducts from '@hooks/useProducts';
import useFavorites from '@hooks/useFavorites';

import { Container, HeaderWrapper } from './styles';

interface HeaderProps {
  productTitle?: {
    title: string;
    price: string;
    favorite: React.ReactNode;
  };
  subtitle?: string;
  description: string;
  toggleMenu(): void;
}

const Header: React.FC<HeaderProps> = ({
  subtitle,
  description,
  productTitle,
  toggleMenu,
}) => {
  const [value, setValue] = useState('');

  const location = useLocation();
  const { findProducts, productsSearchs } = useProducts();
  const { findFavorites } = useFavorites();

  const debouncedValue = useDebounce(value, 500);

  useEffect(() => {
    if (location.pathname === '/favorites') {
      findFavorites(debouncedValue);
    } else {
      findProducts(debouncedValue);
    }
  }, [debouncedValue, findProducts, location.pathname, findFavorites]);

  return (
    <Container>
      <div className="header__group">
        <button
          type="button"
          className="header__menu-icon-button"
          onClick={toggleMenu}
        >
          <img src={menuImg} alt="menu" className="header__menu-icon" />
        </button>

        <HeaderWrapper>
          <div className="header__title-group">
            <h2 className="header__title">
              {productTitle ? productTitle.title : 'Empresa XPTO -'}
            </h2>
            {productTitle?.price && (
              <p className="header__title-price">{productTitle.price}</p>
            )}
            {productTitle?.favorite}
          </div>
          <p className="header__subtitle">{subtitle}</p>
        </HeaderWrapper>

        <div className="header__search-wrapper">
          {productTitle && (
            <Link to="/" className="header__return">
              <img src={returnImg} alt="return" />
            </Link>
          )}
          <div className="header__search">
            <img src={loupeImg} alt="search" />
            <label htmlFor="input_search">
              <input
                id="input_search"
                name="input_search"
                list="suggestion_list"
                placeholder="Buscar"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
              {productsSearchs && (
                <datalist id="suggestion_list">
                  {productsSearchs.map((search) => (
                    <option key={search} value={search}>
                      {search}
                    </option>
                  ))}
                </datalist>
              )}
            </label>
          </div>
        </div>
      </div>

      <p className="header__description">{description}</p>
    </Container>
  );
};

export default Header;
