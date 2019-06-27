import { createSymbiote } from 'redux-symbiote'

export const filterTypes = {
  ALL: 'all',
  COMPLETED: 'completed',
  NOT_COMPLTED: 'not_completed'
}

const initialState = filterTypes.ALL

const symbiotes = {
  change: (_, newFilter) => newFilter
}

export const { actions, reducer } = createSymbiote(
  initialState,
  symbiotes,
  '@@todos-filter'
)
