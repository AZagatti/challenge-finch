import React from 'react';

import Layout from '@components/Layout';
import Card from '@components/Card';

import useFavorites from '@hooks/useFavorites';

import { Container } from './styles';

const Favorites: React.FC = () => {
  const { favorites } = useFavorites();

  return (
    <Layout
      subtitle="Meus Favoritos"
      description="Listagem de produtos marcados como favoritos - clique no produto desejado para saber mais"
    >
      <Container>
        {favorites.map((favorite) => (
          <Card key={favorite.id} product={favorite} />
        ))}
      </Container>
    </Layout>
  );
};

export default Favorites;
