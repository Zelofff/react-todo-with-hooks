import nanoid from 'nanoid'

export const ADD_TODO = '@@todos-list/add-todo'
export const REMOVE_TODO = '@@todos-list/remove-todo'

export const addTodo = text => ({ type: ADD_TODO, id: nanoid(10), text })
export const removeTodo = id => ({ type: REMOVE_TODO, id })
