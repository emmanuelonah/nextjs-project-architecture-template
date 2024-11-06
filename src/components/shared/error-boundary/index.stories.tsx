import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import { throwError } from 'utils';

import { ErrorBoundary } from './index.component';

export default {
  title: 'Components/ErrorBoundary',
  component: ErrorBoundary as unknown,
} as Meta<typeof ErrorBoundary>;

function ThrowError() {
  React.useEffect(() => {
    throwError('ErrorBoundarySimulationError', 'Lets simulate our ErrorBoundary Abilities 🛠️');
  }, []);

  return <p>This can never be rendered, are you checking it in the DOM ☕️</p>;
}

export const Primary: StoryFn<typeof ErrorBoundary> = () => (
  <ErrorBoundary>
    <ThrowError />
  </ErrorBoundary>
);
