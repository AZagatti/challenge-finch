import React, { useState, createContext, useCallback } from 'react';

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

interface FavoritesContextData {
  favorites: Product[];
  addToFavorites(product: Product): void;
  isFavorited(id: number): boolean;
  findFavorites(e: string): void;
}

const FavoritesContext = createContext<FavoritesContextData>(
  {} as FavoritesContextData,
);

const FavoritesProvider: React.FC = ({ children }) => {
  const [favorites, setFavorites] = useState<Product[]>(() => {
    const storagedFavorites = localStorage.getItem('@XPTO:favorites');
    if (storagedFavorites) {
      return JSON.parse(storagedFavorites);
    }
    return [];
  });
  const [originalFavorites, setOriginalFavorites] = useState<Product[]>(() => {
    const storagedFavorites = localStorage.getItem('@XPTO:favorites');
    if (storagedFavorites) {
      return JSON.parse(storagedFavorites);
    }
    return [];
  });

  const addToFavorites = useCallback((product: Product) => {
    setFavorites((state) => {
      const productExists = state.some((produc) => produc.id === product.id);
      if (productExists) {
        const newFavorites = state.filter((produc) => produc.id !== product.id);
        localStorage.setItem('@XPTO:favorites', JSON.stringify(newFavorites));
        return newFavorites;
      }
      const restFavorites = [...state, product];
      localStorage.setItem('@XPTO:favorites', JSON.stringify(restFavorites));
      return restFavorites;
    });
    setOriginalFavorites((state) => {
      const productExists = state.some((produc) => produc.id === product.id);
      if (productExists) {
        return state.filter((produc) => produc.id !== product.id);
      }
      return [...state, product];
    });
  }, []);

  const findFavorites = useCallback(
    (e: string) => {
      setFavorites(
        originalFavorites.filter((favorite) => {
          return (
            favorite.nome.toLowerCase().includes(e.toLowerCase()) ||
            favorite.decricaoCurta.toLowerCase().includes(e.toLowerCase())
          );
        }),
      );
    },
    [originalFavorites],
  );

  const isFavorited = useCallback(
    (id: number) => favorites.some((favorite) => favorite.id === id),
    [favorites],
  );

  return (
    <FavoritesContext.Provider
      value={{ favorites, addToFavorites, isFavorited, findFavorites }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export { FavoritesProvider, FavoritesContext, FavoritesContextData };
