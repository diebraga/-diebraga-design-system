import type { StoryObj, Meta } from '@storybook/react'

import { Avatar, AvatarProps } from '@diebraga/react'

export default {
  title: 'Layout/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/diebraga.png',
    alt: 'Diego Braga',
  },
} as Meta

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
