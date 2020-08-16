import React from 'react';

import Layout from '@components/Layout';

import { Container } from './styles';

const Details: React.FC = () => {
  return (
    <Layout
      productTitle={{
        title: 'Fone Bluetooth XPTO',
        price: 'R$ 198,00',
        favorite: (
          <div className="header__favorite">
            <input type="checkbox" id="toggle" className="header__checkbox" />
            <label htmlFor="toggle" className="header__switch" />
            tornar favorito
          </div>
        ),
      }}
      description="Aparelho intra auricular de som em alta definição sem fio para os viciados de"
    >
      <Container>
        <div className="details__informations">
          <div className="details__header">
            <img src="https://i.imgur.com/ZwIhQDO.jpg" alt="phone" />
            <div className="details__type">Promoção</div>
          </div>
          <div>
            <h2 className="details__title">Detalhes do Produto</h2>
            <p className="details__description">
              Os novos fones de ouvido bluetooth XPTO proporcionam o melhor
              cancelamento de ruído da classe e a capacidade de misturar o som
              do ambiente para uma maior consciência dos arredores quando o
              desejar, fazendo dele o fone de ouvido esportivo mais versátil do
              mercado. Projetado para o esporte com um design reflexivo
              exclusivo, os fones de ouvido bluetooth XPTO apresentam o lendário
              som XPTO e um design de ajuste ergonômico que mantém os fones no
              lugar, independentemente da intensidade da rotina de exercícios. À
              prova de suor e disponível em azul, preto, vermelho e
              azul-esverdeado, os fones de ouvido bluetooth XPTO não precisam de
              bateria, pois extraem energia e áudio digital diretamente do
              conector lightning em dispositivos Apple.
            </p>
          </div>
        </div>
        <div className="details__footer">
          <h2 className="details__title">Ficha Técnica</h2>
          <div className="details__datasheet">
            <ul>
              <li>Lightning connector: Sim</li>
              <li>Lightning connector: Sim</li>
              <li>Lightning connector: Sim</li>
              <li>Lightning connector: Sim</li>
              <li>Lightning connector: Sim</li>
              <li>Lightning connector: Sim</li>
              <li>Lightning connector: Sim</li>
              <li>Lightning connector: Sim</li>
              <li>Lightning connector: Sim</li>
              <li>Lightning connector: Sim</li>
              <li>Lightning connector: Sim</li>
              <li>Lightning connector: Sim</li>
              <li>Lightning connector: Sim</li>
              <li>Lightning connector: Sim</li>
              <li>Lightning connector: Sim</li>
              <li>Lightning connector: Sim</li>
              <li>Lightning connector: Sim</li>
              <li>Lightning connector: Sim</li>
              <li>Lightning connector: Sim</li>
              <li>Lightning connector: Sim</li>
              <li>Lightning connector: Sim</li>
              <li>Lightning connector: Sim</li>
              <li>Lightning connector: Sim</li>
              <li>Lightning connector: Sim</li>
              <li>Lightning connector: Sim</li>
              <li>Lightning connector: Sim</li>
              <li>Lightning connector: Sim</li>
              <li>Lightning connector: Sim</li>
              <li>Lightning connector: Sim</li>
              <li>Lightning connector: Sim</li>
              <li>Lightning connector: Sim</li>
              <li>Lightning connector: Sim</li>
              <li>Lightning connector: Sim</li>
            </ul>
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default Details;
