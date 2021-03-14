import { useSession } from 'next-auth/client';

import { Container } from 'components/Container';
import Footer from 'components/Footer';
import Menu from 'components/Menu';

import * as S from './styles';

const Base: React.FC = ({ children }) => {
  const [session] = useSession();
  {
    console.log(session);
  }

  return (
    <S.Wrapper>
      <Container>
        <Menu username={session?.user.name} />
      </Container>

      <S.Content>{children}</S.Content>

      <S.SectionFooter>
        <Container>
          <Footer />
        </Container>
      </S.SectionFooter>
    </S.Wrapper>
  );
};

export default Base;
