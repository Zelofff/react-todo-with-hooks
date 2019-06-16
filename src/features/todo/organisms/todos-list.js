import React from 'react'

import { ItemsList } from '@ui'
import { TodoItem } from './todo-item'

const noop = () => {}

export const TodosList = () => {
  const items = [
    { text: 'hello world', completed: true, id: '1' },
    { text: 'hello', completed: false, id: '2' },
    { text: 'hi', completed: false, id: '3' }
  ]

  return (
    <ItemsList
      items={items}
      render={item => (
        <TodoItem key={item.id} todo={item} onSave={noop} onRemove={noop} />
      )}
    />
  )
}
