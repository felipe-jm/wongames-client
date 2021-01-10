import { ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';

import { Wrapper } from './styles';

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = {
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  minimal?: boolean;
  icon?: JSX.Element;
  as?: React.ElementType;
  onClick?: () => (event: React.MouseEvent<HTMLButtonElement>) => void;
} & ButtonTypes;

const Button: React.FC<ButtonProps> = ({
  children,
  minimal = false,
  icon,
  as,
  size = 'medium',
  fullWidth = false,
  ...props
}) => (
  <Wrapper
    as={as}
    size={size}
    fullWidth={fullWidth}
    hasIcon={!!icon}
    minimal={minimal}
    {...props}
  >
    {!!icon && icon}
    {!!children && <span>{children}</span>}
  </Wrapper>
);

export default Button;
