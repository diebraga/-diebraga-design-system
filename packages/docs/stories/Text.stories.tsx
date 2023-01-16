import React from 'react'
import type { StoryObj, Meta } from '@storybook/react'

import { Text, TextProps } from '@diebraga/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children: (
      <>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet placeat
        corrupti aperiam quas ducimus, eos sequi modi quos iusto impedit
        reiciendis magni recusandae fugit, culpa iste suscipit velit est facere!
      </>
    ),
  },
} as Meta

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    as: 'strong',
    children: (
      <>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit iusto
        quos, numquam perspiciatis excepturi quaerat impedit ratione doloremque
        laboriosam rem eum iste non facilis hic voluptatibus quasi nihil labore
        repellendus.
      </>
    ),
  },
}
