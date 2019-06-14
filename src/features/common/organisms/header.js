import React from 'react'
import { styled } from 'linaria/react'

export const Header = () => (
  <HeaderBox>
    <Heading>React Todo App with Hooks</Heading>
  </HeaderBox>
)

const HeaderBox = styled.div`
  display: flex;
  flex-flow: row nowrap;
  padding: 15px 30px;
  box-sizing: border-box;
  box-shadow: 0 10px 20px rgba(36, 37, 38, 0.08);
`

const Heading = styled.h1`
  font-size: 2rem;
`
