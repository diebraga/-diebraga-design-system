import React, { ComponentProps } from 'react'
import { AvatarContainer, AvatarFallback, AvatarImage } from './Avatar.styles'
import { User } from 'phosphor-react'

export type AvatarProps = ComponentProps<typeof AvatarImage>

const Avatar: React.FC<AvatarProps> = ({ src }) => {
  return (
    <AvatarContainer>
      <AvatarImage src={src} />
      <AvatarFallback>
        <User />
      </AvatarFallback>
    </AvatarContainer>
  )
}

export { Avatar }
