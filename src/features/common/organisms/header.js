import React from 'react'
import { useThemeState, useThemeToggle } from '@lib/theme-context'
import { styled } from 'linaria/react'
import { light } from '@ui/themes'

import { EmojiButton } from '@ui'

export const Header = () => (
  <HeaderBox>
    <Heading>React Todo App with Hooks</Heading>
    <ToggleThemeButton />
  </HeaderBox>
)

const HeaderBox = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
  background-color: var(--color-primary);
  box-sizing: border-box;
  box-shadow: 0 10px 20px rgba(36, 37, 38, 0.08);
`

const Heading = styled.h1`
  font-size: 2rem;
  color: var(--color-secondary);
`

const ToggleThemeButton = () => {
  const theme = useThemeState()
  const toggle = useThemeToggle()

  const isDark = theme !== light

  return <EmojiButton onClick={toggle}>{isDark ? '🌙' : '🌞'}</EmojiButton>
}
