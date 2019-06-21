import { createSymbiote } from 'redux-symbiote'
import nanoid from 'nanoid'

const initialState = []

const symbiotes = {
  add: (state, text) => [
    ...state,
    {
      id: nanoid(10),
      completed: false,
      text
    }
  ],
  remove: (state, id) => state.filter(todo => todo.id !== id),
  toggle: (state, id) =>
    state.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ),
  edit: (state, id, text) =>
    state.map(todo => (todo.id === id ? { ...todo, text } : todo))
}

export const { actions, reducer } = createSymbiote(
  initialState,
  symbiotes,
  '@@todos'
)
