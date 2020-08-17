import React from 'react';
import MockAdapter from 'axios-mock-adapter';
import { render, waitFor, fireEvent } from '@testing-library/react';

import Details from '@pages/Details';

import AppProvider from '@contexts/index';

import api from '@services/api';

const product = {
  id: 1,
  nome: 'Fake Product',
  valor: 10.0,
  formattedValue: 'R$ 10,00',
  exclusivo: true,
  promocao: false,
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
    Link: ({ children }: { children: React.ReactNode }) => children,
    useLocation: () => ({
      state: {
        product,
      },
    }),
    useHistory: () => ({
      push: jest.fn(),
    }),
  };
});

describe('<Details />', () => {
  it('should be able to render Details with base Layout', async () => {
    const apiMock = new MockAdapter(api);

    apiMock.onGet('').reply(200, { produtos: [product] });
    const component = render(
      <AppProvider>
        <Details />
      </AppProvider>,
    );

    await waitFor(() => {
      expect(component.getByText('Fake Product')).toBeInTheDocument();
    });
  });
  it('should be able to render Details with base Layout', async () => {
    const apiMock = new MockAdapter(api);

    apiMock.onGet('').reply(200, { produtos: [product] });
    const component = render(
      <AppProvider>
        <Details />
      </AppProvider>,
    );

    const button = component.getByTestId('details-favorite-label');
    const checkbox = await component.findByTestId('details-favorite-checkbox');
    const check = (checkbox as unknown) as HTMLInputElement;

    fireEvent.click(button);

    expect(check.checked).toBe(true);
  });
});
