import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Card from '@components/Card';
import { FavoritesProvider } from '@contexts/favorites';

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

const mockedHistoryPush = jest.fn();

jest.mock('react-router-dom', () => {
  return {
    useHistory: () => ({
      push: mockedHistoryPush,
    }),
  };
});

describe('<Card />', () => {
  it('should be able to add render a Card', async () => {
    const component = render(
      <FavoritesProvider>
        <Card product={product} />
      </FavoritesProvider>,
    );

    expect(component.getByText('Fake Product')).toBeInTheDocument();
  });
  it('should be able to add a product to favorites', async () => {
    const component = render(
      <FavoritesProvider>
        <Card product={product} />
      </FavoritesProvider>,
    );

    const label = await component.findByTestId('toggle-1');
    const checkbox = await component.findByTestId('checkbox-1');
    const check = (checkbox as unknown) as HTMLInputElement;

    fireEvent.click(label);

    expect(check.checked).toBe(true);
  });
  it('should be able to navigate to details', async () => {
    const component = render(
      <FavoritesProvider>
        <Card product={product} />
      </FavoritesProvider>,
    );

    const img = await component.findByAltText('Fake Product');

    fireEvent.click(img);

    expect(mockedHistoryPush).toBeCalled();
  });
});
