import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { useTodos, useInput } from 'hooks'
import PropTypes from 'prop-types'

import Todos from 'components/todos'
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
  const [value, handleChange, setValue] = useInput('')

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
