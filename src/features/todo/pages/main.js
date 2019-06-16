import React from 'react'

import { CommonTodosTemplate } from '../templates/common'
import { TodosList } from '../organisms'

export const TodosPage = () => {
  return (
    <CommonTodosTemplate>
      <TodosList />
    </CommonTodosTemplate>
  )
}
