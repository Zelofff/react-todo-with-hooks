import { styled } from 'linaria/react'

export const Text = styled.p`
  margin: ${props => props.margin || 0};
  padding: ${props => props.padding || 0};
  font-size: ${props => props.size || '1.4rem'};
  color: ${props => props.color || '#000'};
`
