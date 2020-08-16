import React from 'react';

import { Container } from './styles';

const Card: React.FC = () => {
  return (
    <Container>
      <div className="card__header">
        <img src="https://i.imgur.com/ZwIhQDO.jpg" alt="phone" />
        <div className="card__type">Promoção</div>
      </div>

      <div className="card__main">
        <p className="card__price">R$ 198,00</p>
        <div className="card__favorite">
          <input type="checkbox" id="toggle" className="card__checkbox" />
          <label htmlFor="toggle" className="card__switch" />
          tornar favorito
        </div>
      </div>

      <div className="card__footer">
        <p className="card__title">Fone Bluetooth XPTO</p>
        <p className="card__description">
          Aparelho intra auricular de som em alta definição sem fio para os
          viciados de plantão
        </p>
      </div>
    </Container>
  );
};

export default Card;
