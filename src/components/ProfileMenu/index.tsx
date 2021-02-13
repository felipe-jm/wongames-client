import Link from 'next/link';

import {
  AccountCircle,
  CreditCard,
  ExitToApp,
  FormatListBulleted
} from '@styled-icons/material-outlined';

import * as S from './styles';

export enum ProfileLinks {
  Me = '/profile/me',
  Cards = '/profile/cards',
  Orders = '/profile/order'
}

export type ProfileMenuProps = {
  activeLink?: ProfileLinks;
};

const ProfileMenu: React.FC<ProfileMenuProps> = ({ activeLink }) => (
  <S.Nav>
    <Link href={ProfileLinks.Me} passHref>
      <S.Link isActive={activeLink === ProfileLinks.Me} title="My profile">
        <AccountCircle size={24} />
        <span>My profile</span>
      </S.Link>
    </Link>

    <Link href={ProfileLinks.Cards} passHref>
      <S.Link isActive={activeLink === ProfileLinks.Cards} title="My cards">
        <CreditCard size={24} />
        <span>My cards</span>
      </S.Link>
    </Link>

    <Link href={ProfileLinks.Orders} passHref>
      <S.Link isActive={activeLink === ProfileLinks.Orders} title="My orders">
        <FormatListBulleted size={24} />
        <span>My Orders</span>
      </S.Link>
    </Link>

    <Link href="/profile/logout" passHref>
      <S.Link title="Sign out">
        <ExitToApp size={24} />
        <span>Sign out</span>
      </S.Link>
    </Link>
  </S.Nav>
);

export default ProfileMenu;
