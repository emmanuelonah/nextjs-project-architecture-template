import React from 'react';

import { StoryFn, Meta } from '@storybook/react';

import { Heading1, Heading2, Heading3, Heading4 } from '.';

export default {
  title: 'Components/Headings',
  component: Heading1,
} as Meta<typeof Heading1>;

export const H1: StoryFn<typeof Heading1> = () => <Heading1>Heading 1</Heading1>;

export const H2: StoryFn<typeof Heading2> = () => <Heading2>Heading 2</Heading2>;

export const H3: StoryFn<typeof Heading3> = () => <Heading3>Heading 3</Heading3>;

export const H4: StoryFn<typeof Heading4> = () => <Heading4>Heading 4</Heading4>;
