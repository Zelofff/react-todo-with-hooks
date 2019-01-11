import { useState, useEffect } from 'react'
import { v4 } from 'uuid'

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

  const toggleTodo = id => {
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

  const removeTodo = id => {
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
