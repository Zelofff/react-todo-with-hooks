import React, { createContext } from 'react'
import PropTypes from 'prop-types'

import { isPreferedThemeDark } from './is-prefered-dark'
import { light, dark } from '@ui/themes'

const ThemeStateContext = createContext()
const ThemeUpdaterContext = createContext()

export const ThemeProvider = ({ children }) => {
  const initialTheme = isPreferedThemeDark() ? dark : light

  const [theme, setTheme] = React.useState(initialTheme)

  return (
    <ThemeStateContext.Provider value={theme}>
      <ThemeUpdaterContext.Provider value={setTheme}>
        {children}
      </ThemeUpdaterContext.Provider>
    </ThemeStateContext.Provider>
  )
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export const useThemeState = () => {
  const themeState = React.useContext(ThemeStateContext)

  return themeState
}

export const useThemeToggle = () => {
  const setTheme = React.useContext(ThemeUpdaterContext)

  const toggle = React.useCallback(
    () => setTheme(t => (t === light ? dark : light)),
    [setTheme]
  )

  return toggle
}
