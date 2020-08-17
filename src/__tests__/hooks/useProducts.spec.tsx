import { renderHook, act } from '@testing-library/react-hooks';
import MockAdapter from 'axios-mock-adapter';

import { ProductsProvider } from '@contexts/products';
import useProducts from '@hooks/useProducts';
import api from '@services/api';

const apiMock = new MockAdapter(api);

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

describe('useProducts', () => {
  it('should be able to get items from products context', async () => {
    localStorage.clear();
    apiMock.onGet('').reply(200, { produtos: [product] });

    const { result, waitForNextUpdate } = renderHook(() => useProducts(), {
      wrapper: ProductsProvider,
    });

    await waitForNextUpdate();
    expect(result.current.products).toMatchObject([product]);
  });
  it('should be able to find a product', async () => {
    localStorage.clear();
    apiMock.onGet('').reply(200, { produtos: [product] });

    const { result, waitForNextUpdate } = renderHook(() => useProducts(), {
      wrapper: ProductsProvider,
    });

    act(() => {
      result.current.findProducts('fake');
    });

    await waitForNextUpdate();

    expect(result.current.products).toMatchObject([product]);
  });
  it('should be able to load searchs from storage', async () => {
    apiMock.onGet('').reply(200, { produtos: [product] });
    const getItemSpy = jest.spyOn(Storage.prototype, 'getItem');

    const { waitForNextUpdate } = renderHook(() => useProducts(), {
      wrapper: ProductsProvider,
    });

    await waitForNextUpdate();

    expect(getItemSpy).toHaveBeenCalledWith('@XPTO:products_searchs');
  });
  it('should be able to get error from api', async () => {
    const consoleSpy = jest
      .spyOn(console, 'log')
      .mockImplementationOnce(jest.fn());
    apiMock.onGet('').reply(400, { produtos: [product] });

    const { waitForNextUpdate } = renderHook(() => useProducts(), {
      wrapper: ProductsProvider,
    });

    await waitForNextUpdate();

    expect(consoleSpy).toHaveBeenCalled();
  });
});
