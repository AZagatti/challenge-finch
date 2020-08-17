import { renderHook, act } from '@testing-library/react-hooks';

import { FavoritesProvider } from '@contexts/favorites';
import useFavorites from '@hooks/useFavorites';

const product = {
  id: 1,
  nome: 'Fake Product',
  valor: 10.0,
  formattedValue: 'R$ 10,00',
  exclusivo: false,
  promocao: true,
  imagem: 'fake-img',
  decricaoCurta: 'Fake short description',
  descricaoLonga: 'Fake long description',
  fichaTecnica: [
    {
      titulo: 'Fake',
      descricao: 'Yes',
    },
  ],
};

describe('useFavorites', () => {
  it('should be able to add a item from favorites', async () => {
    localStorage.clear();
    const setItemSpy = jest.spyOn(Storage.prototype, 'setItem');

    const { result } = renderHook(() => useFavorites(), {
      wrapper: FavoritesProvider,
    });

    act(() => result.current.addToFavorites(product));

    expect(result.current.favorites).toStrictEqual([product]);
    expect(setItemSpy).toHaveBeenCalledWith(
      '@XPTO:favorites',
      JSON.stringify([product]),
    );
  });
  it('should be able to load favorites from storage', async () => {
    const { result } = renderHook(() => useFavorites(), {
      wrapper: FavoritesProvider,
    });

    expect(result.current.favorites).toStrictEqual([product]);
  });
  it('should be able to remove a item from favorites', async () => {
    localStorage.clear();
    const setItemSpy = jest.spyOn(Storage.prototype, 'setItem');

    const { result } = renderHook(() => useFavorites(), {
      wrapper: FavoritesProvider,
    });

    act(() => result.current.addToFavorites(product));
    act(() => result.current.addToFavorites(product));

    expect(result.current.favorites).toStrictEqual([]);
    expect(setItemSpy).toHaveBeenCalledWith(
      '@XPTO:favorites',
      JSON.stringify([]),
    );
  });
  it('should be able to find a item from favorites', async () => {
    localStorage.clear();

    const { result } = renderHook(() => useFavorites(), {
      wrapper: FavoritesProvider,
    });

    act(() => {
      result.current.addToFavorites(product);
    });
    act(() => {
      result.current.findFavorites('fake');
    });

    expect(result.current.favorites).toStrictEqual([product]);
  });
  it('should be able to find is favorited', async () => {
    localStorage.clear();

    const { result } = renderHook(() => useFavorites(), {
      wrapper: FavoritesProvider,
    });

    let favorited = false;
    act(() => {
      result.current.addToFavorites(product);
    });
    act(() => {
      favorited = result.current.isFavorited(product.id);
    });

    expect(favorited).toEqual(true);
  });
});
