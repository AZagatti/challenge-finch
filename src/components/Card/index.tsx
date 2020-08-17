import React, { useCallback } from 'react';

import useFavorites from '@hooks/useFavorites';

import { useHistory } from 'react-router-dom';
import { Container } from './styles';

interface CardProps {
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

const Card: React.FC<CardProps> = ({ product }) => {
  const history = useHistory();
  const { isFavorited, addToFavorites } = useFavorites();

  const navigateToDetails = useCallback(() => {
    history.push('/details', {
      product,
    });
  }, [product, history]);

  return (
    <Container exclusive={product?.exclusivo} promotion={product?.promocao}>
      <header className="card__header">
        <button
          className="card__navigate-button"
          onClick={navigateToDetails}
          type="button"
        >
          <img src={product.imagem} alt={product.nome} />
          <div className="card__type">
            {product?.promocao && 'Promoção'}
            {product?.exclusivo && 'Exclusivo'}
          </div>
        </button>
      </header>

      <main className="card__main">
        <button
          className="card__navigate-button"
          onClick={navigateToDetails}
          type="button"
        >
          <p className="card__price">{product.formattedValue}</p>
        </button>
        <div className="card__favorite">
          <input
            type="checkbox"
            id={`toggle-${product.id}`}
            data-testid={`checkbox-${product.id}`}
            className="card__checkbox"
            checked={isFavorited(product.id)}
            onChange={() => addToFavorites(product)}
          />
          <label
            data-testid={`toggle-${product.id}`}
            htmlFor={`toggle-${product.id}`}
            className="card__switch"
          />
          tornar favorito
        </div>
      </main>

      <footer className="card__footer">
        <button
          className="card__navigate-button"
          onClick={navigateToDetails}
          type="button"
        >
          <p className="card__title">{product.nome}</p>
          <p className="card__description">{product.decricaoCurta}</p>
        </button>
      </footer>
    </Container>
  );
};

export default Card;
