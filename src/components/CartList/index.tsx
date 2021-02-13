import Link from 'next/link';

import Button from 'components/Button';
import GameItem, { GameItemProps } from 'components/GameItem';

import * as S from './styles';

export type CartListProps = {
  items: GameItemProps[];
  total: string;
  hasButton?: boolean;
};

const CartList: React.FC<CartListProps> = ({
  items,
  total,
  hasButton = false
}) => (
  <S.Wrapper isEmpty={!items}>
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
  </S.Wrapper>
);

export default CartList;
