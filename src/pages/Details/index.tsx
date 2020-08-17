import React from 'react';
import { useLocation } from 'react-router-dom';

import Layout from '@components/Layout';

import useFavorites from '@hooks/useFavorites';
import { Container } from './styles';

interface Product {
  product: {
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
  };
}

const Details: React.FC = () => {
  const { state } = useLocation<Product>();
  const { isFavorited, addToFavorites } = useFavorites();

  return (
    <Layout
      productTitle={{
        title: state.product.nome,
        price: state.product.formattedValue,
        favorite: (
          <div className="header__favorite">
            <input
              type="checkbox"
              id="toggle"
              data-testid="details-favorite-checkbox"
              className="header__checkbox"
              checked={isFavorited(state.product.id)}
              onChange={() => addToFavorites(state.product)}
            />
            <label
              htmlFor="toggle"
              data-testid="details-favorite-label"
              className="header__switch"
            />
            tornar favorito
          </div>
        ),
      }}
      description={state.product.decricaoCurta}
    >
      <Container>
        <div className="details__informations">
          <div className="details__header">
            <img src={state.product.imagem} alt={state.product.nome} />
            <div className="details__type">
              {state.product.promocao && 'Promoção'}
              {state.product.exclusivo && 'Exclusivo'}
            </div>
          </div>
          <div>
            <h2 className="details__title">Detalhes do Produto</h2>
            <p className="details__description">
              {state.product.descricaoLonga}
            </p>
          </div>
        </div>
        <div className="details__footer">
          <h2 className="details__title">Ficha Técnica</h2>
          <div className="details__datasheet">
            <ul>
              {state.product.fichaTecnica.map((item) => (
                <li key={item.titulo}>
                  {item.titulo}: {item.descricao}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default Details;
