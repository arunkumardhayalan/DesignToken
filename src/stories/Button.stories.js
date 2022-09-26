import { colors } from '@storybook/node-logger';
import React from 'react';
import { Button } from './Button';

export default {
  title: 'Shared/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  buttonLabel: 'Button',
  backgroundColor: '#000000',
  color:'#ffffff',
};

export const Secondary = Template.bind({});
Secondary.args = {
  buttonLabel: 'Button',
  backgroundColor: '#ededed'
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  buttonLabel: 'Button',
  backgroundColor: '#000000'
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  buttonLabel : 'Button',
};