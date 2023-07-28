import React from 'react';

import { StoryFn, Meta } from '@storybook/react';

import { IconSample } from './index.svg';

export default {
  title: 'Assets/IconSample',
  component: IconSample,
} as Meta<typeof IconSample>;

export const Primary: StoryFn<typeof IconSample> = () => <IconSample />;
