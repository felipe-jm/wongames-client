import {
  AddShoppingCart,
  FavoriteBorder
} from '@styled-icons/material-outlined';

import Button from 'components/Button';
import Heading from 'components/Heading';
import Ribbon from 'components/Ribbon';

import * as S from './styles';

export type GameInfoProps = {
  title: string;
  description: string;
  price: string;
};

const GameInfo: React.FC<GameInfoProps> = ({ title, description, price }) => (
  <S.Wrapper>
    <Heading color="black" lineBottom>
      {title}
    </Heading>

    <Ribbon color="secondary">{`$${price}`}</Ribbon>

    <S.Description>{description}</S.Description>

    <S.ButtonsWrapper>
      <Button icon={<AddShoppingCart />} size="large">
        Add to Cart
      </Button>
      <Button icon={<FavoriteBorder />} size="large" minimal>
        Add to Wishlist
      </Button>
    </S.ButtonsWrapper>
  </S.Wrapper>
);

export default GameInfo;
