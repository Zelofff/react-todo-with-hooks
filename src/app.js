import React from 'react'
import { hot } from 'react-hot-loader/root'
import './global-styles'

import { TodosPage } from '@features/todo'
import { ThemeProvider } from '@lib/theme-context'

const AppContainer = () => {
  return (
    <ThemeProvider>
      <TodosPage className={global} />
    </ThemeProvider>
  )
}

export const App = hot(AppContainer)
