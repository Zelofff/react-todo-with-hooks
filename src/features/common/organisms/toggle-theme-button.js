import React from 'react'
import { useThemeState, useThemeToggle } from '@lib/theme-context'
import { styled } from 'linaria/react'

import { light } from '@ui/themes'

import { Emoji } from '@ui'

export const ToggleThemeButton = () => {
  const ref = React.createRef()
  const theme = useThemeState()
  const toggle = useThemeToggle()
  const isDark = theme !== light

  const handleToggle = () => {
    ref.current.focus()
    toggle()
  }

  // TODO: Maybe useKeyDown(callback, keycode, keycode, ...)

  const handleKeyDown = e => {
    if (e.keyCode === 32 || e.keyCode === 13) {
      toggle()
    }
  }

  return (
    <Switcher onClick={handleToggle} onKeyDown={handleKeyDown}>
      <Emoji ariaLabel="Dark theme" emoji="🌙" size="1.5rem" />
      <Emoji ariaLabel="Light theme" emoji="🌞" size="1.5rem" />
      <Circle
        aria-label="Switch between light and dark theme"
        role="checkbox"
        aria-checked={isDark}
        ref={ref}
        tabIndex="0"
        isDark={isDark}
      />
    </Switcher>
  )
}

// TODO: Maybe extract

const Switcher = styled.div`
  position: relative;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
  background-color: #000;
  border-radius: 5rem;
  height: 32px;
  flex: 64px 0 0;
  cursor: pointer;
`

const Circle = styled.div`
  position: absolute;
  left: 1px;
  top: 1px;
  background-color: #fff;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  transform: ${props => (props.isDark ? 'translateX(32px)' : 'translateX(0)')};
  transition: transform 0.5s cubic-bezier(0.23, 1, 0.32, 1) 0ms;
`
