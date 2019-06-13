import React from 'react'
import { hot } from 'react-hot-loader/root'
import { styled } from 'linaria/react'

const Heading = styled.h1`
  font-size: 2rem;
  color: #f012be;
`

export const App = hot(() => (
  <>
    <header>
      <Heading>Hello world with Linaria</Heading>
    </header>
    <main>hello world</main>
  </>
))
