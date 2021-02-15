import { useCallback } from 'react';

import Base from 'templates/Base';

import CartList, { CartListProps } from 'components/CartList';
import { Container } from 'components/Container';
import { Divider } from 'components/Divider';
import Empty from 'components/Empty';
import { GameCardProps } from 'components/GameCard';
import Heading from 'components/Heading';
import { HighlightProps } from 'components/Highlight';
import PaymentOptions, { PaymentOptionsProps } from 'components/PaymentOptions';
import Showcase from 'components/Showcase';

import * as S from './styles';

export type CartTemplateProps = {
  recommendedTitle: string;
  recommendedGames: GameCardProps[];
  recommendedHighlight: HighlightProps;
} & CartListProps &
  Pick<PaymentOptionsProps, 'cards'>;

const Cart: React.FC<CartTemplateProps> = ({
  recommendedTitle,
  recommendedGames,
  recommendedHighlight,
  items,
  total,
  cards
}) => {
  const handlePayment = useCallback(() => ({}), []);

  return (
    <Base>
      <Container>
        <Heading lineLeft lineColor="secondary">
          My cart
        </Heading>

        {items?.length ? (
          <S.Content>
            <CartList items={items} total={total} />

            <PaymentOptions cards={cards} handlePayment={handlePayment} />
          </S.Content>
        ) : (
          <Empty
            title="Your cart is empty"
            description="Go back to the store and explore great games and offers"
            hasLink
          />
        )}

        <Divider />
      </Container>

      <Showcase
        title={recommendedTitle || 'You may like these games'}
        games={recommendedGames}
        highlight={recommendedHighlight}
      />
    </Base>
  );
};

export default Cart;
