import React from 'react'
import PropTypes from 'prop-types'
import { useInput } from '@lib/use-input'
import { styled } from 'linaria/react'

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
      <Checkbox
        checked={todo.completed}
        onToggle={onToggle}
        labelledBy={todo.id}
      />
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
    // eslint-disable-next-line
    <Input autoFocus value={text} onChange={onChange} />
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

const Checkbox = ({ onToggle, checked, labelledBy }) => {
  const handleKeyDown = e => {
    if (e.keyCode === 32) {
      onToggle()
    }
  }

  return (
    <Box
      role="checkbox"
      tabIndex="0"
      checked={checked}
      aria-checked={checked}
      aria-labelledby={labelledBy}
      onClick={onToggle}
      onKeyDown={handleKeyDown}
    />
  )
}

Checkbox.propTypes = {
  onToggle: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired,
  labelledBy: PropTypes.string.isRequired
}

const TodoBox = styled.li``
const Input = styled.input``
const Text = styled.p``
const Buttons = styled.div``
const Button = styled.button``
const Box = styled.div`
  position: relative;
  border: 1px solid #000;
  width: 15px;
  height: 15px;
  cursor: pointer;
  ::after {
    content: ${props => (props.checked ? '"✔"' : ' ')};
  }
`
