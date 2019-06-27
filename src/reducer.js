import { combineReducers } from 'redux'

import {
  todosReducer as todos,
  filterReducer as todosFilter
} from '@features/todos'

export const reducer = combineReducers({
  todos,
  todosFilter
})
