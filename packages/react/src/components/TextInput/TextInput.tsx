import React, { ComponentProps } from 'react'
import { Input, InputPrefix, TextInputContainer } from './TextInput.styles'

export type TextInputProps = ComponentProps<typeof Input> & {
  prefix?: string
}
const TextInput: React.FC<TextInputProps> = ({ prefix, ...props }) => {
  return (
    <TextInputContainer>
      {!!prefix && <InputPrefix>{prefix}</InputPrefix>}
      <Input {...props} />
    </TextInputContainer>
  )
}

export { TextInput }
