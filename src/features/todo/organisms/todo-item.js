import React from 'react'
import PropTypes from 'prop-types'
import { useInput } from '@lib/use-input'

import { Text, EmojiButton } from '@ui'
import { TodoBox, TodoInput, Checkbox, ButtonsBox } from '../atoms'

export const TodoItem = ({ todo, onToggle, onSave, onRemove }) => {
  const [editing, setEditing] = React.useState(false)
  const [newText, setNewText, reset] = useInput(todo.text)

  const toggleEdit = () => {
    setEditing(e => !e)
  }

  const handleSave = () => {
    onSave(newText)
    toggleEdit()
  }

  const handleCancel = () => {
    toggleEdit()
    reset()
  }

  return (
    <TodoBox>
      {!editing && (
        <Checkbox
          checked={todo.completed}
          onToggle={onToggle}
          labelledBy={todo.id}
        />
      )}
      <TodoCenterContent
        idForA11y={todo.id}
        text={newText}
        editing={editing}
        onChange={setNewText}
      />
      <TodoButtons
        editing={editing}
        onEdit={toggleEdit}
        onRemove={onRemove}
        onSave={handleSave}
        onCancel={handleCancel}
      />
    </TodoBox>
  )
}

TodoItem.propTypes = {
  todo: PropTypes.shape({
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired
  }),
  onToggle: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired
}

const TodoCenterContent = ({ idForA11y, text, editing, onChange }) => {
  return editing ? (
    <TodoInput
      autoFocus
      aria-label="todo text"
      value={text}
      onChange={onChange}
      id={idForA11y}
    />
  ) : (
    <Text id={idForA11y}>{text}</Text>
  )
}

TodoCenterContent.propTypes = {
  idForA11y: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  editing: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired
}

const TodoButtons = ({ editing, onEdit, onRemove, onSave, onCancel }) => (
  <ButtonsBox>
    {editing ? (
      <>
        <EmojiButton onClick={onSave} ariaLabel="save" emoji="💾" />
        <EmojiButton onClick={onCancel} ariaLabel="cancel" emoji="❌" />
      </>
    ) : (
      <>
        <EmojiButton onClick={onEdit} ariaLabel="edit" emoji="✏️" />
        <EmojiButton onClick={onRemove} ariaLabel="remove" emoji="🗑" />
      </>
    )}
  </ButtonsBox>
)

TodoButtons.propTypes = {
  editing: PropTypes.bool.isRequired,
  onEdit: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired
}
