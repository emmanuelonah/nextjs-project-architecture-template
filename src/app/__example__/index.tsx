import { Heading4 } from 'components';
import { ChuckNorrisJokeResponse } from 'ChuckNorrisTypes';

import { AsyncRenderer } from './components/async-renderer';
import { useChuckNorrisPresenter } from './useChuckNorris.presenter';
import { Wrapper, GenerateJoke, CreatorLink, Joke, Icon } from './index.style';

export function ChuckNorris() {
  const { isLoading, error, data, refetch } = useChuckNorrisPresenter();

  return (
    <Wrapper>
      <Heading4>
        <CreatorLink href="https://www.linkedin.com/in/onah/" target="_blank" rel="noopener">
          Welcome to a nextjs production template created for you by Emmanuel Onah
        </CreatorLink>
      </Heading4>
      <AsyncRenderer<ChuckNorrisJokeResponse>
        endpoint="jokes/random"
        isLoading={isLoading}
        error={error}
        data={data!}
        hasData={!!data}
      >
        {(joke) => (
          <>
            <Icon src={joke?.icon_url} alt="Chuck Norris" />
            <Joke>{joke?.value}</Joke>
          </>
        )}
      </AsyncRenderer>
      <GenerateJoke onClick={() => refetch()}>Generate new Joke</GenerateJoke>
    </Wrapper>
  );
}
