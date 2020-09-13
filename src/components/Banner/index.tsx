import Button from 'components/Button';

import { Wrapper, Image, Caption, Title, Subtitle } from './styles';

export type BannerProps = {
  img: string;
  title: string;
  subtitle: string;
  buttonLabel: string;
  buttonLink: string;
};

const Banner: React.FC<BannerProps> = ({
  img,
  title,
  subtitle,
  buttonLabel,
  buttonLink
}) => (
  <Wrapper>
    <Image src={img} role="img" aria-label={title} />

    <Caption>
      <Title>{title}</Title>
      <Subtitle dangerouslySetInnerHTML={{ __html: subtitle }} />
      <Button as="a" href={buttonLink} size="large">
        {buttonLabel}
      </Button>
    </Caption>
  </Wrapper>
);

export default Banner;
