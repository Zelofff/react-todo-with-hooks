import React from 'react'

import { H1 } from '@ui'
import { HeaderBox } from '../atoms'
import { ToggleThemeButton } from './toggle-theme-button'

export const Header = () => (
  <HeaderBox>
    <H1>React Todo App</H1>
    <ToggleThemeButton />
  </HeaderBox>
)
