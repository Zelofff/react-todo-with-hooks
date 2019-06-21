import { combineReducers } from 'redux'

import { allIds } from './todos-list'
import { byId } from './todo-item'

export const todos = combineReducers({
  allIds,
  byId
})
