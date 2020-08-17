import React, { useState, useCallback } from 'react';

import useProducts from '@hooks/useProducts';

import spinnerImg from '@assets/spinner.png';

import Header from './Header';
import SideMenu from './SideMenu';

import { Container, Main } from './styles';

interface LayoutProps {
  productTitle?: {
    title: string;
    price: string;
    favorite: React.ReactNode;
  };
  subtitle?: string;
  description: string;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  subtitle,
  description,
  productTitle,
}) => {
  const [showMenu, setShowMenu] = useState(false);
  const { loading } = useProducts();

  const toggleMenu = useCallback(() => {
    setShowMenu((state) => !state);
  }, []);

  return (
    <Container>
      <Header
        subtitle={subtitle}
        description={description}
        productTitle={productTitle}
        toggleMenu={toggleMenu}
      />
      <SideMenu showMenu={showMenu} toggleMenu={toggleMenu} />
      <Main>
        {loading ? (
          <div className="layout__spinner-wrapper">
            <img src={spinnerImg} alt="Loading" className="layout__spinner" />
          </div>
        ) : (
          children
        )}
      </Main>
    </Container>
  );
};

export default Layout;
