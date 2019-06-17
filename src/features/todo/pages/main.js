import React from 'react'

import { CommonTodosTemplate } from '../templates'
import { TodosList } from '../organisms'

export const TodosPage = () => {
  return (
    <CommonTodosTemplate>
      <TodosList />
    </CommonTodosTemplate>
  )
}
