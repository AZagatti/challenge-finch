import React from 'react';

import Header from './Header';
import SideMenu from './SideMenu';

import { Container, Main } from './styles';

interface LayoutProps {
  subtitle: string;
  description: string;
}

const Layout: React.FC<LayoutProps> = ({ children, subtitle, description }) => {
  return (
    <Container>
      <Header subtitle={subtitle} description={description} />
      <SideMenu />
      <Main>{children}</Main>
    </Container>
  );
};

export default Layout;
