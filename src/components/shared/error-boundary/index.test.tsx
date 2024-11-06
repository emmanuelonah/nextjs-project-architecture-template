import React from 'react';

import { throwError } from 'utils';

import { ErrorBoundary } from './index.component';
import { renderWithOptions, screen, fireEvent, waitFor } from '../../../utils/test/index.util';

jest.mock('../../../utils/env/index.util.ts', () => ({
  __DEV__: true,
  isBrowser: true,
}));
jest.mock('next/image', () => ({
  __esModule: true,
  default: (
    props: JSX.IntrinsicAttributes & React.ClassAttributes<HTMLImageElement> & React.ImgHTMLAttributes<HTMLImageElement>
  ) => <img {...props} alt="" />,
}));

function ThrowError() {
  throwError('ErrorBoundarySimulationError', 'Lets simulate our ErrorBoundary Abilities 🛠️');

  return <p>This can never be rendered, are you checking it in the DOM ☕️</p>;
}

describe('first', () => {
  it('should render child component when its error free', () => {
    renderWithOptions(
      <ErrorBoundary>
        <p>Foo Bar Baz</p>
      </ErrorBoundary>
    );

    expect(screen.getByText('Foo Bar Baz')).toBeInTheDocument();
  });

  it('should render ErrorBoundary component when child component is not error free', async () => {
    renderWithOptions(
      <ErrorBoundary>
        <ThrowError />
      </ErrorBoundary>
    );

    expect(screen.getByText('Oops, compilation error </>')).toBeInTheDocument();
    await waitFor(() => {
      fireEvent.click(screen.getByText('Try again?'));
    });
  });
});
