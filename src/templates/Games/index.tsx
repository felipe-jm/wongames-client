import { useCallback } from 'react';

import { KeyboardArrowDown as ArrowDown } from '@styled-icons/material-outlined';
import Base from 'templates/Base';

import ExploreSidebar, { ItemProps } from 'components/ExploreSidebar';
import GameCard, { GameCardProps } from 'components/GameCard';
import { Grid } from 'components/Grid';

import * as S from './styles';

export type GamesTemplateProps = {
  games?: GameCardProps[];
  filterItems: ItemProps[];
};

const GamesTemplate: React.FC<GamesTemplateProps> = ({
  games,
  filterItems
}) => {
  const handleFilter = useCallback(() => undefined, []);

  const handleShowMore = useCallback(() => undefined, []);

  return (
    <Base>
      <S.Main>
        <ExploreSidebar items={filterItems} onFilter={handleFilter} />

        <section>
          <Grid>
            {games?.map((game) => (
              <GameCard key={game.title} {...game} />
            ))}
          </Grid>

          <S.ShowMore role="button" onClick={handleShowMore}>
            <p>Show more</p>
            <ArrowDown size={35} />
          </S.ShowMore>
        </section>
      </S.Main>
    </Base>
  );
};

export default GamesTemplate;
