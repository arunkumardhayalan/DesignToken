import React from 'react'
import Login from './Login'

export default {
  title: 'Pages/Login',
  component: Login,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    TextClr: { control: { type: 'color' } },
    backgroundColor: { control: 'color' },
  }
};
const Template = (args) => <Login {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  TextClr: "black",
  backgroundColor: "black",
  InputBorder: "5px solid red",
  ButtonBgClr: "black",
  ButtonTextClr: "black",
  borderTopRightRadius: '5px',
  borderTopLeftRadius: '5px',
  borderBottomRightRadius: "5px",
  borderBottomleftRadius: "5px"
}