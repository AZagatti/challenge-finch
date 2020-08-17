import { useContext } from 'react';

import { FavoritesContext, FavoritesContextData } from '../contexts/favorites';

function useFavorites(): FavoritesContextData {
  const context = useContext(FavoritesContext);

  return context;
}

export default useFavorites;
