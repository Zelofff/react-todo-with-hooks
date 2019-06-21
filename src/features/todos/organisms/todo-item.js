import React from 'react'
import PropTypes from 'prop-types'
import { useInput } from '@lib/use-input'

import { EmojiButton } from '@ui'
import { TodoBox, TodoInput, TodoText, Checkbox, ButtonsBox } from '../atoms'

export const TodoItem = ({ todo, onToggle, onRemove, onEdit }) => {
  const [editing, setEditing] = React.useState(false)
  const [newText, setNewText, reset] = useInput(todo.text)

  const onToggleTodo = () => onToggle(todo.id)
  const onRemoveTodo = () => onRemove(todo.id)
  const onEditTodo = () => {
    onEdit(todo.id, newText)
    toggleEdit()
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
    <TodoInput
      autoFocus
      aria-label="todo text"
      value={text}
      onChange={onChange}
      id={idForA11y}
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
