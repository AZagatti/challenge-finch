import React from 'react';

import Layout from '@components/Layout';
import Card from '@components/Card';

import useProducts from '@hooks/useProducts';

import { Container } from './styles';

const Home: React.FC = () => {
  const { products } = useProducts();

  return (
    <Layout
      subtitle="Conheça todos os nossos produtos"
      description="Listagem de produtos - clique no produto desejado para saber mais"
    >
      <Container>
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </Container>
    </Layout>
  );
};

export default Home;
