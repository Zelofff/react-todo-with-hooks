import React from 'react'

import { CommonTodosTemplate } from '../templates'
import { TodosList, AddTodoForm } from '../organisms'

export const TodosPage = () => {
  return (
    <CommonTodosTemplate>
      <TodosList />
      <AddTodoForm />
    </CommonTodosTemplate>
  )
}
