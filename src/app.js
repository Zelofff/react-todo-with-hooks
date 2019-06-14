import React from 'react'
import { hot } from 'react-hot-loader/root'
import './global-styles'

import { TodosPage } from '@features/todo'

const AppContainer = () => {
  return <TodosPage className={global} />
}

export const App = hot(AppContainer)
