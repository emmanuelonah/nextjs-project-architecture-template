import { useQuery } from '@tanstack/react-query';

import { ChuckNorrisJokeResponse } from 'ChuckNorrisTypes';

import { ChuckNorrisModel } from './chuck-norris.model';

const JOKES_RANDOM_QUERY_KEY = 'jokes_random';

function useChuckNorrisPresenter() {
  return useQuery<ChuckNorrisJokeResponse | undefined, string>(
    [JOKES_RANDOM_QUERY_KEY],
    ChuckNorrisModel.getRandomJoke
  );
}

export { JOKES_RANDOM_QUERY_KEY, useChuckNorrisPresenter };
