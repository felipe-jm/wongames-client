import { Wrapper } from './styles';

export type LineColors = 'primary' | 'secondary';

export type HeadingProps = {
  children: string;
  color?: 'white' | 'black';
  lineLeft?: boolean;
  lineBottom?: boolean;
  lineColor?: LineColors;
  size?: 'small' | 'medium' | 'huge';
};

const Heading = ({
  children,
  color = 'white',
  lineLeft = false,
  lineBottom = false,
  lineColor = 'primary',
  size = 'medium'
}: HeadingProps) => (
  <Wrapper
    color={color}
    lineLeft={lineLeft}
    lineBottom={lineBottom}
    lineColor={lineColor}
    size={size}
  >
    {children}
  </Wrapper>
);

export default Heading;
