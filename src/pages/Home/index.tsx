import React from 'react';

import Layout from '@components/Layout';
import Card from '@components/Card';

import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <Layout
      subtitle="Conheça todos os nossos produtos"
      description="Listagem de produtos - clique no produto desejado para saber mais"
    >
      <Container>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Container>
    </Layout>
  );
};

export default Home;
