import React from 'react'
import type { StoryObj, Meta } from '@storybook/react'

import { Box, BoxProps, Text } from '@diebraga/react'

export default {
  title: 'Layout/Button',
  component: Box,
  args: {
    children: <Text>test</Text>,
  },
} as Meta

export const Primary: StoryObj<BoxProps> = {}
