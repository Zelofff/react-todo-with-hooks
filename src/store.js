import { createStore } from 'redux'
import { reducer } from './reducers'

export const configureStore = (initialState = {}) => {
  const store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )

  return store
}
