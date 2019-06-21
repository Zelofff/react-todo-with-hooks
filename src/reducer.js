import { combineReducers } from 'redux'

import { todosReducer as todos } from '@features/todos'

export const reducer = combineReducers({
  todos
})
