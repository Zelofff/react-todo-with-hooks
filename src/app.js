import React from 'react'
import { hot } from 'react-hot-loader/root'
import { configureStore } from './store'
import './global-styles'

import { Provider } from 'react-redux'
import { ThemeProvider } from '@lib/theme-context'

import { TodosPage } from '@features/todos'

const store = configureStore()

const AppContainer = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <TodosPage />
      </ThemeProvider>
    </Provider>
  )
}

export const App = hot(AppContainer)
