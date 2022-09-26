import React from 'react'
import InputField from "./InputField";
import './InputField.css'

export default {
    title: 'Shared/InputField',
    component: InputField,
    parameters: {
        layout: 'fullscreen',
    },
    argTypes: {
        borderClr: { control: { type: 'color' } },
    }
};

// function Template() {
//     return (
//         <>
//             <InputField size='small' className="form-control" placeholder='Small size' />
//         </>
//     )
// }

const Template = (args) => <InputField {...args} size='small' className="form-control" placeholder='Small size' />;

export const InputField = Template.bind({});
InputField.args = {
    borderClr: '#000000',
    borderRadius: "6px"
}