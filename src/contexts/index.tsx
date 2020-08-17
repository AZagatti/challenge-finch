import React from 'react';

import { ProductsProvider } from './products';
import { FavoritesProvider } from './favorites';

const AppContext: React.FC = ({ children }) => {
  return (
    <ProductsProvider>
      <FavoritesProvider>{children}</FavoritesProvider>
    </ProductsProvider>
  );
};

export default AppContext;
