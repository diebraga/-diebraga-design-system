import { styled } from '../../styles'

export const TextInputContainer = styled('div', {
  background: '$gray100',
  padding: '$3 $4',
  borderRadius: '$sm',
  border: '2px solid $gray100',
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'baseline',

  '&:has(input:focus)': {
    borderColor: '$ignite300',
  },

  '&:has(input:disabled)': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
})

export const InputPrefix = styled('span', {
  fontFamily: '$default',
  fontSize: '$md',
  color: '$gray500',
  fontWeight: '$regular',
})

export const Input = styled('input', {
  fontFamily: '$default',
  fontSize: '$sm',
  color: '$gray900',
  fontWeight: 'regular',
  background: 'transparent',
  border: 0,
  width: '100%',

  '&:focus': {
    outline: 0,
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  '&:placeholder': {
    color: '$gray400',
  },
})
