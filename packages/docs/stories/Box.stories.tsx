import React from 'react'
import type { StoryObj, Meta } from '@storybook/react'

import { Box, BoxProps, Text } from '@diebraga/react'

export default {
  title: 'Layout/Box',
  component: Box,
  args: {
    children: <Text>Box</Text>,
  },
} as Meta

export const Primary: StoryObj<BoxProps> = {}
