import React, { useState, useCallback } from 'react';

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
      <Main>{children}</Main>
    </Container>
  );
};

export default Layout;
