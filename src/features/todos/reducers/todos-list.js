import { ADD_TODO, REMOVE_TODO } from '../actions'

const initialState = []

export const todosAllIdsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.id]

    case REMOVE_TODO:
      return state.filter(id => id !== action.id)

    default:
      return state
  }
}
