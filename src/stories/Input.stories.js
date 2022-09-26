import React from 'react'
import Input from './Input'
import './Input.css'

export default {
  title: 'Shared/Input',
  component: Input
}

export const Small = () => <Input size='small' className="form-control" placeholder='Small size' />
export const Medium = () => <Input size='medium' placeholder='Medium size' />
export const Large = () => <Input size='large' placeholder='Large size' />