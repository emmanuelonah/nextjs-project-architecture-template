import React from 'react';

import { StoryObj, Meta } from '@storybook/react';

import { typography } from './index';

interface TypographyPropTypes extends React.CSSProperties {
  children: React.ReactNode;
}

const Typography = ({ children, ...restProps }: TypographyPropTypes) => (
  <h1 style={restProps}>{children}</h1>
);

const meta: Meta<typeof Typography> = {
  title: 'TYPOGRAPHY',
  component: Typography,
};

export default meta;

type Story = StoryObj<typeof Typography>;

export const TitleH1: Story = {
  args: {
    fontWeight: typography.title1.fontWeight,
    fontSize: typography.title1.fontSize,
    children: 'TitleH1',
  },
};

export const TitleH2: Story = {
  args: {
    fontWeight: typography.title2.fontWeight,
    fontSize: typography.title2.fontSize,
    children: 'TitleH2',
  },
};

export const TitleH3: Story = {
  args: {
    fontWeight: typography.title3.fontWeight,
    fontSize: typography.title3.fontSize,
    children: 'TitleH3',
  },
};

export const BoldBody: Story = {
  args: {
    fontWeight: typography.title1.fontWeight,
    fontSize: typography.title1.fontSize,
    children: 'TitleH1',
  },
};

export const Subtitle: Story = {
  args: {
    fontWeight: typography.subtitle.fontWeight,
    fontSize: typography.subtitle.fontSize,
    children: 'Subtitle',
  },
};

export const BodyText: Story = {
  args: {
    fontWeight: typography.bodyText.fontWeight,
    fontSize: typography.bodyText.fontSize,
    children: 'BodyText',
  },
};

export const SmallText: Story = {
  args: {
    fontWeight: typography.smallText.fontWeight,
    fontSize: typography.smallText.fontSize,
    children: 'SmallText',
  },
};

export const PreText: Story = {
  args: {
    fontWeight: typography.preText.fontWeight,
    fontSize: typography.preText.fontSize,
    children: 'PreText',
  },
};
