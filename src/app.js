import React from 'react'
import { hot } from 'react-hot-loader/root'

import { TodosPage } from '@features/todo'

const AppContainer = () => {
  return <TodosPage />
}

export const App = hot(AppContainer)
