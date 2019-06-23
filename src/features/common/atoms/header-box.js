import { styled } from 'linaria/react'

// TODO: Atom wrapper

export const HeaderBox = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
  background-color: var(--color-primary);
  color: var(--color-on-primary);
  box-shadow: 0px 5px 20px -5px var(--color-shadow);
  box-sizing: border-box;
  transition: background-color 0.2s ease-out;
`
