import Link from 'next/link';

import { useCart } from 'hooks/use-cart';

import Button from 'components/Button';
import Empty from 'components/Empty';
import GameItem from 'components/GameItem';

import * as S from './styles';

export type CartListProps = {
  hasButton?: boolean;
};

const CartList: React.FC<CartListProps> = ({ hasButton = false }) => {
  const { items, total } = useCart();

  return (
    <S.Wrapper isEmpty={!items.length}>
      {items.length ? (
        <>
          {items.map((item) => (
            <GameItem key={item.title} {...item} />
          ))}

          <S.Footer>
            {!hasButton && <span>Total:</span>}
            <S.Total>{total}</S.Total>

            {hasButton && (
              <Link href="/cart" passHref>
                <Button as="a">Buy it now</Button>
              </Link>
            )}
          </S.Footer>
        </>
      ) : (
        <>
          <Empty
            title="Your cart is empty"
            description="Go back to the store and explore great games and offers"
            hasLink
          />
        </>
      )}
    </S.Wrapper>
  );
};

export default CartList;
