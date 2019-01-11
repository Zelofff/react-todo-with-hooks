import React from 'react'
import PropTypes from 'prop-types'

import Todo from 'components/todo'

import List from '@material-ui/core/List'

const Todos = ({ todos, removeTodo, toggleTodo, editTodo, ...other }) => (
  <List {...other}>
    {todos.map((todo, index) => (
      <Todo
        key={todo.id}
        todo={todo}
        index={index}
        removeTodo={removeTodo}
        toggleTodo={toggleTodo}
        editTodo={editTodo}
      />
    ))}
  </List>
)

Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  toggleTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired
}

export default Todos
