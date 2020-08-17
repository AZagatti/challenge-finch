import React from 'react';
import MockAdapter from 'axios-mock-adapter';
import { render, waitFor, fireEvent } from '@testing-library/react';

import Loader from '@components/Loader';

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
  };
});

describe('<Loader />', () => {
  it('should be able to render Loader with base Layout', async () => {
    const apiMock = new MockAdapter(api);

    apiMock.onGet('').reply(200, { produtos: [product] });
    const component = render(
      <AppProvider>
        <Loader />
      </AppProvider>,
    );

    await waitFor(() => {
      expect(component.getByText('Empresa XPTO -')).toBeInTheDocument();
    });
  });
  it('should be able to open and close menu', async () => {
    const apiMock = new MockAdapter(api);

    apiMock.onGet('').reply(200, { produtos: [product] });
    const component = render(
      <AppProvider>
        <Loader />
      </AppProvider>,
    );

    const button = await component.findByTestId('menu-button');

    fireEvent.click(button);

    await waitFor(() => {
      expect(component.getByText('Empresa XPTO -')).toBeInTheDocument();
    });
  });
});
