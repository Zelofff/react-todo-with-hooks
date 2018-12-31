import React, { useState } from 'react'
import { withStyles } from '@material-ui/core/styles'
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
  const [value, setValue] = useState(text)

  const handleChange = e => {
    setValue(e.target.value)
  }

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

  return !editing ? (
    <ListItem divider>
      <Checkbox onClick={toggleTodo(id)} checked={checked} tabIndex={index} />
      <ListItemText
        className={checked ? classes.checkedTodo : ''}
        primary={text}
        onClick={handleEdit}
      />
      <ListItemSecondaryAction>
        <IconButton onClick={removeTodo(id)} aria-label="Remove todo">
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  ) : (
    <TodoForm
      onSubmit={handleSubmit}
      onChange={handleChange}
      onCancel={handleCancel}
      value={value}
      label="Edit Todo"
      withCancel
    />
  )
}

Todo.propTypes = {
  todo: PropTypes.object,
  index: PropTypes.number,
  removeTodo: PropTypes.func,
  toggleTodo: PropTypes.func,
  editTodo: PropTypes.func,
  classes: PropTypes.object
}

export default withStyles(styles)(Todo)
