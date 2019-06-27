import React from 'react'

import { CommonTodosTemplate } from '../templates'
import { TodosList, AddTodoForm, TodosFilter } from '../organisms'

export const TodosPage = () => {
  return (
    <CommonTodosTemplate>
      <TodosFilter />
      <TodosList />
      <AddTodoForm />
    </CommonTodosTemplate>
  )
}
