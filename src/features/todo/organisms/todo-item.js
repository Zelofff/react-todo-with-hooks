import React from 'react'
import PropTypes from 'prop-types'
import { useInput } from '@lib/use-input'
import { styled } from 'linaria/react'

export const TodoItem = ({ todo, onSave, onRemove }) => {
  const [editing, setEditing] = React.useState(false)
  const [newText, setNewText, reset] = useInput(todo.text)

  const handleEdit = () => {
    setEditing(true)
  }

  const handleSave = () => {
    onSave(newText)
    setEditing(false)
  }

  const handleCancel = () => {
    setEditing(false)
    reset()
  }

  return (
    <TodoBox>
      <Checkbox checked={todo.checked} />
      <TodoCenterContent
        text={newText}
        editing={editing}
        onChange={setNewText}
      />
      <TodoButtons
        editing={editing}
        onEdit={handleEdit}
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
  onSave: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired
}

const TodoCenterContent = ({ text, editing, onChange }) => {
  return editing ? (
    <Input value={text} onChange={onChange} />
  ) : (
    <Text>{text}</Text>
  )
}

TodoCenterContent.propTypes = {
  text: PropTypes.string.isRequired,
  editing: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired
}

const TodoButtons = ({ editing, onEdit, onRemove, onSave, onCancel }) => (
  <Buttons>
    {editing ? (
      <>
        <Button onClick={onSave}>Save</Button>
        <Button onClick={onCancel}>Cancel</Button>
      </>
    ) : (
      <>
        <Button onClick={onEdit}>Edit</Button>
        <Button onClick={onRemove}>Remove</Button>
      </>
    )}
  </Buttons>
)

TodoButtons.propTypes = {
  editing: PropTypes.bool.isRequired,
  onEdit: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired
}

const TodoBox = styled.li``
const Checkbox = styled.div``
const Input = styled.input``
const Text = styled.p``
const Buttons = styled.div``
const Button = styled.button``
