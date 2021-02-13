import { ShoppingCart } from '@styled-icons/material-outlined';

import * as S from './styles';

export type CartIconProps = {
  quantity?: number;
};

const CartIcon: React.FC<CartIconProps> = ({ quantity = 0 }) => (
  <S.Wrapper>
    {quantity > 0 && <S.Badge aria-label="Cart items">{quantity}</S.Badge>}
    <ShoppingCart aria-label="Shopping Cart" />
  </S.Wrapper>
);

export default CartIcon;
