import React from 'react';
import MockAdapter from 'axios-mock-adapter';
import { render, waitFor } from '@testing-library/react';

import Home from '@pages/Home';

import AppProvider from '@contexts/index';

import api from '@services/api';

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
      pathname: '/',
    }),
    useHistory: () => ({
      push: jest.fn(),
    }),
  };
});

describe('<Home />', () => {
  it('should be able to render Home with base Layout', async () => {
    const apiMock = new MockAdapter(api);

    apiMock.onGet('').reply(200, { produtos: [product] });
    const component = render(
      <AppProvider>
        <Home />
      </AppProvider>,
    );

    await waitFor(() => {
      expect(
        component.getByText('Conheça todos os nossos produtos'),
      ).toBeInTheDocument();
    });
  });
});
