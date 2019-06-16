import { styled } from 'linaria/react'

export const H1 = styled.h1`
  font-size: 2rem;
  color: ${props => props.color || 'var(--color-secondary)'};
`
