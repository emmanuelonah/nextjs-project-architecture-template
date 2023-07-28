import { render, screen } from '@testing-library/react';

import { Main } from './index';

describe('<Main/>', () => {
  it('should render component', () => {
    render(
      <Main>
        <p>Foo Bar Baz</p>
      </Main>
    );

    expect(screen.getByText('Foo Bar Baz')).toBeInTheDocument();
  });
});
