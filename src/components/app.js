import React, { useState } from 'react'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

import Todos, { useTodos } from 'components/todos'
import TodoForm from 'components/todo-form'

import Paper from '@material-ui/core/Paper'

const initialState = [
  {
    id: 'very-uniq-id-1',
    text: 'Learn React hooks',
    checked: true
  },
  {
    id: 'very-uniq-id-2',
    text: 'Write simple todo app with React hooks',
    checked: true
  },
  {
    id: 'very-uniq-id-3',
    text: 'Write app with redux + React hooks',
    checked: false
  }
]

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
  const [todos, actions] = useTodos(initialState)
  const [value, setValue] = useState('')

  const handleChange = e => {
    setValue(e.target.value)
  }

  const handleSubmit = () => {
    actions.addTodo(value)
    setValue('')
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
      />
    </Paper>
  )
}

App.propTypes = {
  classes: PropTypes.object
}

export default withStyles(styles)(App)
