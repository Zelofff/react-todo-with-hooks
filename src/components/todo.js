import React, { useState } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { useInput } from 'hooks'
import PropTypes from 'prop-types'

import TodoForm from 'components/todo-form'

import Checkbox from '@material-ui/core/Checkbox'
import ListItem from '@material-ui/core/ListItem'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'

const styles = () => ({
  checkedTodo: {
    textDecoration: 'line-through'
  }
})

const Todo = ({ todo, index, removeTodo, toggleTodo, editTodo, classes }) => {
  const { id, text, checked } = todo
  const [editing, setEditing] = useState(false)
  const [value, handleChange, setValue] = useInput(text)

  const handleSubmit = () => {
    editTodo(id, value)
    setEditing(false)
  }

  const handleEdit = () => {
    setEditing(true)
  }

  const handleCancel = () => {
    setEditing(false)
    setValue(text)
  }

  const handleKeyDown = e => {
    if (e.keyCode === 13) {
      handleSubmit()
    }

    if (e.keyCode === 27) {
      handleCancel()
    }
  }

  const handleRemoveTodo = () => {
    removeTodo(id)
  }

  const handleToggleTodo = () => {
    toggleTodo(id)
  }

  return !editing ? (
    <ListItem divider>
      <Checkbox
        onClick={handleToggleTodo}
        checked={checked}
        tabIndex={index + 1}
      />
      <ListItemText
        className={checked ? classes.checkedTodo : ''}
        primary={text}
        onClick={handleEdit}
      />
      <ListItemSecondaryAction>
        <IconButton onClick={handleRemoveTodo} aria-label="Remove todo">
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  ) : (
    <TodoForm
      onSubmit={handleSubmit}
      onChange={handleChange}
      onCancel={handleCancel}
      onKeyDown={handleKeyDown}
      value={value}
      label="Edit Todo"
      editing
    />
  )
}

Todo.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  removeTodo: PropTypes.func.isRequired,
  toggleTodo: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Todo)
