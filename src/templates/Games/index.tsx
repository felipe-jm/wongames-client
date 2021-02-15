import { useCallback } from 'react';
import Lottie from 'react-lottie';

import { KeyboardArrowDown as ArrowDown } from '@styled-icons/material-outlined';
import LoadingGamesAnimation from 'assets/loading-games.json';
import { useQueryGames } from 'graphql/queries/games';
import Base from 'templates/Base';

import ExploreSidebar, { ItemProps } from 'components/ExploreSidebar';
import GameCard from 'components/GameCard';
import { Grid } from 'components/Grid';

import * as S from './styles';

export type GamesTemplateProps = {
  filterItems: ItemProps[];
};

const GamesTemplate: React.FC<GamesTemplateProps> = ({ filterItems }) => {
  const { data, loading, fetchMore } = useQueryGames({
    variables: { limit: 15 }
  });

  const handleFilter = useCallback(() => undefined, []);

  const handleShowMore = useCallback(() => {
    fetchMore({
      variables: {
        limit: 15,
        start: data?.games.length
      }
    });
  }, [data, fetchMore]);

  return (
    <Base>
      <S.Main>
        <ExploreSidebar items={filterItems} onFilter={handleFilter} />

        {loading ? (
          <S.LoadingWrapper>
            <Lottie
              ariaLabel="Loading.."
              isStopped={false}
              isPaused={false}
              options={{
                loop: true,
                autoplay: true,
                animationData: LoadingGamesAnimation,
                rendererSettings: {
                  preserveAspectRatio: 'xMidYMid slice'
                }
              }}
            />
          </S.LoadingWrapper>
        ) : (
          <section>
            <Grid>
              {data?.games?.map((game) => (
                <GameCard
                  key={game.slug}
                  title={game.name}
                  slug={game.slug}
                  developer={game.developers[0].name}
                  img={`http://localhost:1337${game.cover!.url}`}
                  price={game.price}
                />
              ))}
            </Grid>

            <S.ShowMore role="button" onClick={handleShowMore}>
              <p>Show more</p>
              <ArrowDown size={35} />
            </S.ShowMore>
          </section>
        )}
      </S.Main>
    </Base>
  );
};

export default GamesTemplate;
