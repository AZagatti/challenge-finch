import { useContext } from 'react';

import { ProductsContext, ProductContextData } from '../contexts/products';

function useProducts(): ProductContextData {
  const context = useContext(ProductsContext);

  return context;
}

export default useProducts;
