import { createSymbiote } from 'redux-symbiote'
import nanoid from 'nanoid'

const initialState = [
  { id: '1', text: 'hello world', completed: true },
  { id: '2', text: 'hello ', completed: true },
  { id: '3', text: ' world', completed: false }
]

const symbiotes = {
  add: (state, text) => [...state, { id: nanoid(10), completed: false, text }],
  remove: (state, id) => state.filter(todo => todo.id !== id),
  edit: (state, id, text) =>
    state.map(todo => (todo.id === id ? { ...todo, text } : todo)),
  toggle: (state, id) =>
    state.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )
}

export const { actions, reducer } = createSymbiote(
  initialState,
  symbiotes,
  '@@todos'
)
