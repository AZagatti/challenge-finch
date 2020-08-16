import React from 'react';

import codeImg from '@assets/code.png';
import suppliesImg from '@assets/supplies.png';
import boxImg from '@assets/box.png';
import giftBoxImg from '@assets/gift-box.png';
import recommendedImg from '@assets/recommended.png';

import { Container } from './styles';

const SideMenu: React.FC = () => {
  return (
    <Container>
      <div>
        <img src={codeImg} alt="code" />
      </div>
      <div>
        <img src={suppliesImg} alt="all" />
        <p>Todos</p>
      </div>
      <div>
        <img src={boxImg} alt="exclusives" />
        <p>Exclusivos</p>
      </div>
      <div>
        <img src={giftBoxImg} alt="promotion" />
        <p>Promoção</p>
      </div>
      <div>
        <img src={recommendedImg} alt="favorites" />
        <p>Favoritos</p>
      </div>
    </Container>
  );
};

export default SideMenu;
