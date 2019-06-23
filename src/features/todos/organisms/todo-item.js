import React from 'react'
import PropTypes from 'prop-types'
import { useInput } from '@lib/use-input'

import { EmojiButton, Input } from '@ui'
import { TodoBox, TodoText, Checkbox, ButtonsBox } from '../atoms'

// TODO: Maybe extract

export const TodoItem = ({ todo, onToggle, onRemove, onEdit }) => {
  const [editing, setEditing] = React.useState(false)
  const [newText, setNewText, reset] = useInput(todo.text)

  const onToggleTodo = () => onToggle(todo.id)
  const onRemoveTodo = () => onRemove(todo.id)
  const onEditTodo = () => {
    if (newText.trim().length !== 0) {
      onEdit(todo.id, newText)
      toggleEdit()
    }
  }

  const toggleEdit = () => {
    setEditing(e => !e)
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
          onToggle={onToggleTodo}
          labelledBy={todo.id}
        />
      )}
      <TodoTextContent
        idForA11y={todo.id}
        text={newText}
        editing={editing}
        onChange={setNewText}
      />
      <TodoButtons
        editing={editing}
        onEdit={toggleEdit}
        onRemove={onRemoveTodo}
        onSave={onEditTodo}
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
  onEdit: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired
}

const TodoTextContent = ({ idForA11y, text, editing, onChange }) => {
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

const TodoButtons = ({ editing, onEdit, onRemove, onSave, onCancel }) => (
  <ButtonsBox>
    {editing ? (
      <>
        <EmojiButton onClick={onSave} ariaLabel="save" emoji="👌🏻" />
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
