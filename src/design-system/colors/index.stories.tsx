import React from 'react';

import { StoryObj, Meta } from '@storybook/react';

import { colors } from './index';

type ColorsPropTypes = {
  color: string;
};

const Colors = ({ color }: ColorsPropTypes) => (
  <div
    style={{
      width: '100vw',
      height: '100vh',
      backgroundColor: '#34BA96',
      border: 'solid 5px #000',
    }}
  >
    <div
      style={{
        backgroundColor: color,
        borderRadius: '8px',
        width: '250px',
        height: '250px',
      }}
    ></div>
  </div>
);

const meta: Meta<typeof Colors> = {
  title: 'COLORS',
  component: Colors,
};

export default meta;

type Story = StoryObj<typeof Colors>;

export const Primary400: Story = { args: { color: colors.primary400 } };
export const Primary300: Story = { args: { color: colors.primary300 } };
export const Primary200: Story = { args: { color: colors.primary200 } };
export const Primary100: Story = { args: { color: colors.primary100 } };

export const Secondary400: Story = { args: { color: colors.secondary400 } };
export const Secondary300: Story = { args: { color: colors.secondary300 } };
export const Secondary200: Story = { args: { color: colors.secondary200 } };
export const Secondary100: Story = { args: { color: colors.secondary100 } };

export const White400: Story = { args: { color: colors.white400 } };
export const White300: Story = { args: { color: colors.white300 } };
export const White200: Story = { args: { color: colors.white200 } };
export const White100: Story = { args: { color: colors.white100 } };

export const Dark400: Story = { args: { color: colors.dark400 } };
export const Dark300: Story = { args: { color: colors.dark300 } };
export const Dark200: Story = { args: { color: colors.dark200 } };
export const Dark100: Story = { args: { color: colors.dark100 } };

export const Accent400: Story = { args: { color: colors.accent400 } };
export const Accent300: Story = { args: { color: colors.accent300 } };
export const Accent200: Story = { args: { color: colors.accent200 } };
export const Accent100: Story = { args: { color: colors.accent100 } };

export const Success400: Story = { args: { color: colors.success400 } };
export const Success300: Story = { args: { color: colors.success300 } };
export const Success200: Story = { args: { color: colors.success200 } };
export const Success100: Story = { args: { color: colors.success100 } };

export const Error400: Story = { args: { color: colors.error400 } };
export const Error300: Story = { args: { color: colors.error300 } };
export const Error200: Story = { args: { color: colors.error200 } };
export const Error100: Story = { args: { color: colors.error100 } };

export const Warning400: Story = { args: { color: colors.warning400 } };
export const Warning300: Story = { args: { color: colors.warning300 } };
export const Warning200: Story = { args: { color: colors.warning200 } };
export const Warning100: Story = { args: { color: colors.warning100 } };

export const Magenta400: Story = { args: { color: colors.magenta400 } };
export const Magenta300: Story = { args: { color: colors.magenta300 } };
export const Magenta200: Story = { args: { color: colors.magenta200 } };
export const Magenta100: Story = { args: { color: colors.magenta100 } };
