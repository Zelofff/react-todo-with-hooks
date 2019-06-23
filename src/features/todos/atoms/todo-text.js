import { styled } from 'linaria/react'
import { Text } from '@ui'

export const TodoText = styled(Text)`
  min-width: 6rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`
