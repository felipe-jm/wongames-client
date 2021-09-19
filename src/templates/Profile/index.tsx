import { useRouter } from 'next/router';

import Base from 'templates/Base';

import { Container } from 'components/Container';
import Heading from 'components/Heading';
import ProfileMenu, { ProfileLinks } from 'components/ProfileMenu';

import * as S from './styles';

type ProfileTemplateProps = {
  children: React.ReactNode;
};

const Profile = ({ children }: ProfileTemplateProps) => {
  const { asPath } = useRouter();

  return (
    <Base>
      <Container>
        <Heading lineLeft lineColor="secondary">
          My profile
        </Heading>

        <S.Main>
          <ProfileMenu activeLink={asPath as ProfileLinks} />
          <S.Content>{children}</S.Content>
        </S.Main>
      </Container>
    </Base>
  );
};

export default Profile;
