import Container from 'components/Container';
import Footer from 'components/Footer';
import Menu from 'components/Menu';

import * as S from './styles';

const Base: React.FC = ({ children }) => (
  <section>
    <Container>
      <Menu />
    </Container>

    {children}

    <S.SectionFooter>
      <Container>
        <Footer />
      </Container>
    </S.SectionFooter>
  </section>
);

export default Base;
