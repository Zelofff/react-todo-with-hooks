import { combineReducers } from 'redux'

import { todosAllIdsReducer as allIds } from './todos-list'
import { todosByIdReducer as byId } from './todo-item'

export const todos = combineReducers({
  allIds,
  byId
})
