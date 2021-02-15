import Link from 'next/link';

import { useMemo } from 'react';

import {
  AddShoppingCart,
  Favorite,
  FavoriteBorder
} from '@styled-icons/material-outlined';

import Button from 'components/Button';
import Ribbon, { RibbonSizes, RibbonColors } from 'components/Ribbon';

import formatPrice from 'utils/formatPrice';

import * as S from './styles';

export type GameCardProps = {
  slug: string;
  title: string;
  developer: string;
  img: string;
  price: number;
  promotionalPrice?: number;
  favorite?: boolean;
  ribbon?: string;
  ribbonSize?: RibbonSizes;
  ribbonColor?: RibbonColors;
  onFav?: () => void;
};

const GameCard: React.FC<GameCardProps> = ({
  slug,
  title,
  developer,
  img,
  price,
  promotionalPrice,
  favorite = false,
  ribbon,
  ribbonSize = 'small',
  ribbonColor = 'primary',
  onFav
}) => {
  const isFree = useMemo(() => price === 0 || promotionalPrice === 0, [
    price,
    promotionalPrice
  ]);

  return (
    <S.Wrapper>
      {!!ribbon && (
        <Ribbon size={ribbonSize} color={ribbonColor}>
          {ribbon}
        </Ribbon>
      )}

      {promotionalPrice === 0 ||
        (price === 0 && (
          <Ribbon size="normal" color="secondary">
            FREE
          </Ribbon>
        ))}

      <Link href={`game/${slug}`} passHref>
        <S.ImageBox>
          <img src={img} alt={title} />
        </S.ImageBox>
      </Link>

      <S.Content>
        <Link href={`game/${slug}`} passHref>
          <S.Info>
            <S.Title>{title}</S.Title>
            <S.Developer>{developer}</S.Developer>
          </S.Info>
        </Link>
        <S.FavButton role="button" onClick={onFav}>
          {favorite ? (
            <Favorite aria-label="Remove from Wishlist" />
          ) : (
            <FavoriteBorder aria-label="Add to Wishlist" />
          )}
        </S.FavButton>
        <S.BuyBox>
          {!isFree && (
            <>
              {!!promotionalPrice && (
                <S.Price isPromotional>{formatPrice(price)}</S.Price>
              )}
              <S.Price>{formatPrice(promotionalPrice || price)}</S.Price>
            </>
          )}

          <Button icon={<AddShoppingCart />} size="small" />
        </S.BuyBox>
      </S.Content>
    </S.Wrapper>
  );
};

export default GameCard;
