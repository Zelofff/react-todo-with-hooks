import { TOGGLE_TODO, EDIT_TODO, ADD_TODO, REMOVE_TODO } from '../actions'

const initialState = {}

export const byId = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        [action.id]: {
          text: action.text,
          completed: false
        }
      }

    case REMOVE_TODO:
      // eslint-disable-next-line
      const { [action.id]: removedTodo, ...newState } = state

      return newState

    case TOGGLE_TODO:
      const todoToToggle = state[action.id]

      return {
        ...state,
        [action.id]: {
          ...todoToToggle,
          completed: !todoToToggle.completed
        }
      }

    case EDIT_TODO:
      const todoToEdit = state[action.id]

      return {
        ...state,
        [action.id]: {
          ...todoToEdit,
          text: action.text
        }
      }

    default:
      return state
  }
}
