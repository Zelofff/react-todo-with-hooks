import React from 'react'
import PropTypes from 'prop-types'

import { Input } from '@ui'
import { TodoText } from '../atoms'

export const TodoTextContent = ({ idForA11y, text, editing, onChange }) => {
  return editing ? (
    <Input
      autoFocus
      value={text}
      id={idForA11y}
      onChange={onChange}
      aria-label="todo text"
      placeholder="Type here to edit todo text"
    />
  ) : (
    <TodoText margin="0 0 0 1rem" id={idForA11y}>
      {text}
    </TodoText>
  )
}

TodoTextContent.propTypes = {
  idForA11y: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  editing: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired
}
