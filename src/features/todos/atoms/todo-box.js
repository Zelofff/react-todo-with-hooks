import { styled } from 'linaria/react'

export const TodoBox = styled.li`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  background-color: var(--color-surface);
  color: var(--color-on-surface);
  border-radius: 5rem;
  box-shadow: 0px 5px 20px -5px var(--color-shadow);
  margin-bottom: 1.2rem;
  padding: 1rem 1.4rem;
  width: 100%;
  max-height: 4.5rem;
  box-sizing: border-box;
  transition: background-color 0.2s ease-out;
`
