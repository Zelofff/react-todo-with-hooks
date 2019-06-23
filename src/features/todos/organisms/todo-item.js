import React from 'react'
import PropTypes from 'prop-types'
import { useInput } from '@lib/use-input'

import { TodoBox, Checkbox } from '../atoms'
import { TodoTextContent, TodoButtons } from '../molecules'

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
