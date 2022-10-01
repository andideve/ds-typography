import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Typography from '../typography';
import defaults from '../typography.defaults';

export default {
  title: 'Typography',
  component: Typography,
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => <Typography {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  size: defaults.size,
  children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, consectetur.',
};
