import React from 'react';
import MockAdapter from 'axios-mock-adapter';
import { render, waitFor, fireEvent } from '@testing-library/react';
import { renderHook, act } from '@testing-library/react-hooks';

import Favorites from '@pages/Favorites';

import AppProvider from '@contexts/index';

import api from '@services/api';
import { FavoritesProvider } from '@contexts/favorites';
import useFavorites from '@hooks/useFavorites';

const product = {
  id: 1,
  nome: 'Fake Product',
  valor: 10.0,
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

jest.mock('react-router-dom', () => {
  return {
    NavLink: ({ children }: { children: React.ReactNode }) => children,
    useLocation: () => ({
      pathname: '/favorites',
    }),
    useHistory: () => ({
      push: jest.fn(),
    }),
  };
});

jest.useFakeTimers();

describe('<Favorites />', () => {
  it('should be able to render Favorites with base Layout', async () => {
    const apiMock = new MockAdapter(api);

    const { result } = renderHook(() => useFavorites(), {
      wrapper: FavoritesProvider,
    });

    act(() =>
      result.current.addToFavorites({ ...product, formattedValue: 'R$ 10,00' }),
    );

    apiMock.onGet('').reply(200, { produtos: [product] });

    const component = render(
      <AppProvider>
        <Favorites />
      </AppProvider>,
    );

    await waitFor(() => {
      expect(component.getByText('Meus Favoritos')).toBeInTheDocument();
    });
  });
  it('should be able to render Favorites with base Layout', async () => {
    const apiMock = new MockAdapter(api);

    apiMock.onGet('').reply(200, { produtos: [product] });

    const component = render(
      <AppProvider>
        <Favorites />
      </AppProvider>,
    );

    const input = await component.findByTestId('input_search');

    fireEvent.change(input, {
      target: {
        value: 'Fake',
      },
    });

    jest.runAllTimers();

    await waitFor(() => {
      expect(input).toHaveValue('Fake');
    });
  });
});
