import React from 'react'
import { useThemeState, useThemeToggle } from '@lib/theme-context'
import { light } from '@ui/themes'

import { EmojiButton, H1 } from '@ui'
import { HeaderBox } from '../atoms'

export const Header = () => (
  <HeaderBox>
    <H1>React Todo App with Hooks</H1>
    <ToggleThemeButton />
  </HeaderBox>
)

const ToggleThemeButton = () => {
  const theme = useThemeState()
  const toggle = useThemeToggle()

  const isDark = theme !== light

  return (
    <EmojiButton
      onClick={toggle}
      ariaLabel="toggle theme"
      emoji={isDark ? '🌙' : '🌞'}
    />
  )
}
