import React from 'react'
import { styled } from 'linaria/react'
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
    <Form onSubmit={handleSubmit}>
      <Input
        autoFocus
        value={text}
        onChange={setText}
        aria-label="new todo text"
        placeholder="Type here to add new todo"
      />
      <EmojiButton type="submit" ariaLabel="create" emoji="👌🏻" />
    </Form>
  )
}

const Form = styled.form`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  width: 80%;
  max-height: 4.5rem;
  margin: 0 auto;
  padding: 1rem 1.4rem;
  position: relative;
  background-color: var(--color-surface);
  border-radius: 5rem;
  box-shadow: 0px 6px 20px -5px var(--color-shadow);
  box-sizing: border-box;

  @media (max-width: 768px) {
    width: 100%;
  }
`
