import { signOut } from 'next-auth/client';
import Link from 'next/link';

import { ChevronDown } from '@styled-icons/boxicons-regular/ChevronDown';
import {
  AccountCircle,
  FavoriteBorder,
  ExitToApp
} from '@styled-icons/material-outlined';

import Dropdown from 'components/Dropdown';

import * as S from './styles';

export type UserDropdownProps = {
  username: string;
};

const UserDropdown: React.FC<UserDropdownProps> = ({ username }) => (
  <Dropdown
    title={
      <>
        <AccountCircle size={24} />
        <S.Username>{username}</S.Username>
        <ChevronDown size={24} />
      </>
    }
  >
    <S.Nav>
      <Link href="/profile/me" passHref>
        <S.Link>
          <AccountCircle />
          <span>My profile</span>
        </S.Link>
      </Link>
      <Link href="/wishlist" passHref>
        <S.Link title="Wishlist">
          <FavoriteBorder />
          <span>Wishlist</span>
        </S.Link>
      </Link>

      <S.Link role="button" onClick={() => signOut()} title="Sign out">
        <ExitToApp />
        <span>Sign out</span>
      </S.Link>
    </S.Nav>
  </Dropdown>
);

export default UserDropdown;
