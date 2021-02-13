import Base from 'templates/Base';

import { Container } from 'components/Container';
import Empty from 'components/Empty';

const Page404 = () => (
  <Base>
    <Container>
      <Empty
        title="404: Not found"
        description="Oppss.. this page does not exist. Go back to the store and enjoy our offers."
        hasLink
      />
    </Container>
  </Base>
);

export default Page404;
