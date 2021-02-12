import Link from 'next/link';

import { useState } from 'react';

import { Close as CloseIcon } from '@styled-icons/material-outlined/Close';
import { Search as SearchIcon } from '@styled-icons/material-outlined/Search';
import { ShoppingCart as ShoppingCartIcon } from '@styled-icons/material-outlined/ShoppingCart';
import { Menu2 as MenuIcon } from '@styled-icons/remix-fill/Menu2';

import Button from 'components/Button';
import Logo from 'components/Logo';
import MediaMatch from 'components/MediaMatch';

import {
  Wrapper,
  LogoWrapper,
  IconWrapper,
  MenuGroup,
  MenuFull,
  MenuNav,
  MenuLink,
  RegisterBox,
  CreateAccount
} from './styles';

export type MenuProps = {
  username?: string;
};

const Menu: React.FC<MenuProps> = ({ username }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Wrapper>
      <MediaMatch lessThan="medium">
        <IconWrapper onClick={() => setIsOpen(true)}>
          <MenuIcon aria-label="Open Menu" />
        </IconWrapper>
      </MediaMatch>

      <LogoWrapper>
        <Link href="/" passHref>
          <a>
            <Logo hideOnMobile />
          </a>
        </Link>
      </LogoWrapper>

      <MediaMatch greaterThan="medium">
        <MenuNav>
          <Link href="/" passHref>
            <MenuLink>Home</MenuLink>
          </Link>
          <Link href="/" passHref>
            <MenuLink>Explore</MenuLink>
          </Link>
        </MenuNav>
      </MediaMatch>

      <MenuGroup>
        <IconWrapper>
          <SearchIcon aria-label="search" />
        </IconWrapper>

        <IconWrapper>
          <ShoppingCartIcon aria-label="open shopping cart" />
        </IconWrapper>

        {!username && (
          <MediaMatch greaterThan="medium">
            <Link href="/sign-in" passHref>
              <Button as="a">Sign in</Button>
            </Link>
          </MediaMatch>
        )}
      </MenuGroup>

      <MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
        <CloseIcon aria-label="Close Menu" onClick={() => setIsOpen(false)} />
        <MenuNav>
          <Link href="/" passHref>
            <MenuLink href="#">Home</MenuLink>
          </Link>

          <Link href="/" passHref>
            <MenuLink href="#">Explore</MenuLink>
          </Link>

          {!!username && (
            <>
              <MenuLink href="#">My account</MenuLink>
              <MenuLink href="#">Wishlist</MenuLink>
            </>
          )}
        </MenuNav>

        {!username && (
          <RegisterBox>
            <Link href="/sign-in" passHref>
              <Button fullWidth size="large">
                Sign in now
              </Button>
            </Link>
            <span>or</span>
            <Link href="/sign-up" passHref>
              <CreateAccount href="#" title="Sign Up">
                Sign Up
              </CreateAccount>
            </Link>
          </RegisterBox>
        )}
      </MenuFull>
    </Wrapper>
  );
};

export default Menu;
