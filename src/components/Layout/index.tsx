import React from 'react';

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
  return (
    <Container>
      <Header
        subtitle={subtitle}
        description={description}
        productTitle={productTitle}
      />
      <SideMenu />
      <Main>{children}</Main>
    </Container>
  );
};

export default Layout;
