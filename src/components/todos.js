import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { v4 } from 'uuid'

import Todo from 'components/todo'

import List from '@material-ui/core/List'

export const useTodos = (initialState = []) => {
  const [todos, setTodos] = useState(initialState)

  useEffect(
    () => {
      localStorage.setItem('todos', JSON.stringify(todos))
    },
    [todos]
  )

  const addTodo = todoText => {
    const newTodos = [
      ...todos,
      {
        text: todoText,
        checked: false,
        id: v4()
      }
    ]

    setTodos(newTodos)
  }

  const toggleTodo = id => () => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          checked: !todo.checked
        }
      }

      return todo
    })

    setTodos(newTodos)
  }

  const removeTodo = id => () => {
    const newTodos = [...todos].filter(todo => todo.id !== id)

    setTodos(newTodos)
  }

  const editTodo = (id, todoText) => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          text: todoText
        }
      }

      return todo
    })

    setTodos(newTodos)
  }

  return [
    todos,
    {
      addTodo,
      toggleTodo,
      removeTodo,
      editTodo
    }
  ]
}

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
