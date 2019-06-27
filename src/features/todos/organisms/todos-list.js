import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { filteredTodosSelector } from '../selectors'
import { actions } from '../symbiotes/todos'

import { ItemsList } from '@ui'
import { TodoItem } from './todo-item'

export const TodosList = () => {
  const todos = useSelector(state => filteredTodosSelector(state))

  const dispatch = useDispatch()
  const toggleTodo = id => dispatch(actions.toggle(id))
  const remvoeTodo = id => dispatch(actions.remove(id))
  const editTodo = (id, text) => dispatch(actions.edit(id, text))

  return (
    <ItemsList
      items={todos}
      render={item => (
        <TodoItem
          key={item.id}
          todo={item}
          onToggle={toggleTodo}
          onRemove={remvoeTodo}
          onEdit={editTodo}
        />
      )}
    />
  )
}
