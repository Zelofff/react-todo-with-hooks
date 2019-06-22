import React from 'react'
import { useInput } from '@lib/use-input'
import { useDispatch } from 'react-redux'

import { actions } from '../symbiotes/todos'

import { EmojiButton, Input } from '@ui'

export const AddTodoForm = () => {
  const [text, setText, reset] = useInput('')

  const dispatch = useDispatch()
  const handleSubmit = e => {
    e.preventDefault()

    if (text.trim().length === 0) return

    dispatch(actions.add(text))
    reset()
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        autoFocus
        value={text}
        onChange={setText}
        aria-label="new todo text"
        placeholder="Start typing here to add new todo"
      />
      <EmojiButton type="submit" ariaLabel="create" emoji="💾" />
    </form>
  )
}
