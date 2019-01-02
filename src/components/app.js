import React, { useState } from 'react'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

import Todos, { useTodos } from 'components/todos'
import TodoForm from 'components/todo-form'

import Paper from '@material-ui/core/Paper'

const styles = () => ({
  root: {
    width: '100%',
    maxWidth: 720,
    margin: '0 auto'
  },
  todosContainer: {
    padding: 0
  }
})

const App = ({ classes }) => {
  const initialState = localStorage.getItem('todos')
  const [todos, actions] = useTodos(JSON.parse(initialState) || [])
  const [value, setValue] = useState('')

  const handleChange = e => {
    setValue(e.target.value)
  }

  const handleSubmit = () => {
    if (!value.length) return
    actions.addTodo(value)
    setValue('')
  }

  const handleKeyDown = e => {
    if (e.keyCode === 13) {
      handleSubmit()
    }
  }

  return (
    <Paper className={classes.root}>
      <Todos
        todos={todos}
        removeTodo={actions.removeTodo}
        editTodo={actions.editTodo}
        toggleTodo={actions.toggleTodo}
        className={classes.todosContainer}
      />
      <TodoForm
        label="Add new Todo"
        value={value}
        className={classes.todoInput}
        onChange={handleChange}
        onSubmit={handleSubmit}
        onKeyDown={handleKeyDown}
      />
    </Paper>
  )
}

App.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(App)
