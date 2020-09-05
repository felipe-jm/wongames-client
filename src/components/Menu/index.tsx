import { Close as CloseIcon } from '@styled-icons/material-outlined/Close';
import { Search as SearchIcon } from '@styled-icons/material-outlined/Search';
import { ShoppingCart as ShoppingCartIcon } from '@styled-icons/material-outlined/ShoppingCart';
import { Menu2 as MenuIcon } from '@styled-icons/remix-fill/Menu2';
import { useState } from 'react';

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
        <Logo hideOnMobile />
      </LogoWrapper>

      <MediaMatch greaterThan="medium">
        <MenuNav>
          <MenuLink href="#">Sobre</MenuLink>
          <MenuLink href="#">Explore</MenuLink>
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
            <Button>Sign in</Button>
          </MediaMatch>
        )}
      </MenuGroup>

      <MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
        <CloseIcon aria-label="Close Menu" onClick={() => setIsOpen(false)} />
        <MenuNav>
          <MenuLink href="#">Sobre</MenuLink>
          <MenuLink href="#">Explore</MenuLink>

          {!!username && (
            <>
              <MenuLink href="#">My account</MenuLink>
              <MenuLink href="#">Wishlist</MenuLink>
            </>
          )}
        </MenuNav>

        {!username && (
          <RegisterBox>
            <Button fullWidth size="large">
              Log in now
            </Button>
            <span>or</span>
            <CreateAccount href="#" title="Sign Up">
              Sign Up
            </CreateAccount>
          </RegisterBox>
        )}
      </MenuFull>
    </Wrapper>
  );
};

export default Menu;
