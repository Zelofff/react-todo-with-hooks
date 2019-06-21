export const TOGGLE_TODO = '@@todo-item/toggle-todo'
export const EDIT_TODO = '@@todo-item/edit-todo'

export const toggleTodo = id => ({ type: TOGGLE_TODO, id })
export const editTodo = (id, text) => ({ type: EDIT_TODO, id, text })
