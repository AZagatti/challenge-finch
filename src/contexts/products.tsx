import React, {
  useState,
  createContext,
  useEffect,
  useMemo,
  useCallback,
} from 'react';

import api from '@services/api';
import { formatValue } from '@utils/formatters';

interface Product {
  id: number;
  nome: string;
  valor: number;
  exclusivo: boolean;
  promocao: boolean;
  imagem: string;
  decricaoCurta: string;
  descricaoLonga: string;
  fichaTecnica: Array<{
    titulo: string;
    descricao: string;
  }>;
  formattedValue: string;
}

interface ProductContextData {
  products: Product[];
  exclusiveProducts: Product[];
  promotionProducts: Product[];
  productsSearchs: string[];
  findProducts(e: string): void;
}

const ProductsContext = createContext<ProductContextData>(
  {} as ProductContextData,
);

const ProductsProvider: React.FC = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [originalProducts, setOriginalProducts] = useState<Product[]>([]);
  const [productsSearchs, setProductsSearchs] = useState<string[]>(() => {
    const storageSearchs = localStorage.getItem('@XPTO:products_searchs');
    if (storageSearchs) {
      return JSON.parse(storageSearchs);
    }
    return [];
  });

  useEffect(() => {
    (async () => {
      const { data } = await api.get('');
      const newProducts = data.produtos.map(
        (product: Omit<Product, 'formattedValue'>) => ({
          ...product,
          formattedValue: formatValue(product.valor),
        }),
      );
      setOriginalProducts(newProducts);
      setProducts(newProducts);
    })();
  }, []);

  const findProducts = useCallback(
    (e: string) => {
      setProductsSearchs((state) => {
        const newSearchs = Array.from(new Set([...state, e]));
        localStorage.setItem(
          '@XPTO:products_searchs',
          JSON.stringify(newSearchs),
        );
        return newSearchs;
      });
      setProducts(
        originalProducts.filter((product) => {
          return (
            product.nome.toLowerCase().includes(e.toLowerCase()) ||
            product.decricaoCurta.toLowerCase().includes(e.toLowerCase())
          );
        }),
      );
    },
    [originalProducts],
  );

  const exclusiveProducts = useMemo(
    () => products.filter((product) => product.exclusivo),
    [products],
  );

  const promotionProducts = useMemo(
    () => products.filter((product) => product.promocao),
    [products],
  );

  return (
    <ProductsContext.Provider
      value={{
        products,
        exclusiveProducts,
        promotionProducts,
        findProducts,
        productsSearchs,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export { ProductsProvider, ProductsContext, ProductContextData };
