import { Wrapper } from './styles';

export type HeadingProps = {
  children: string;
  color?: 'white' | 'black';
  lineLeft?: boolean;
  lineBottom?: boolean;
};

const Heading: React.FC<HeadingProps> = ({
  children,
  color = 'white',
  lineLeft = false,
  lineBottom = false
}) => (
  <Wrapper color={color} lineLeft={lineLeft} lineBottom={lineBottom}>
    {children}
  </Wrapper>
);

export default Heading;
