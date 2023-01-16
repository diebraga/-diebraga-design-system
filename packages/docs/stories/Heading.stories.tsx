import type { Meta, StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from '@diebraga/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children: 'H2 Heading',
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'H1 Heading',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story:
          'By default Heading component will be always a `h2`, but we can change it using the prop `as`.',
      },
    },
  },
}
