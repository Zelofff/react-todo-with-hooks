import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { actions, filterTypes } from '../symbiotes/filter'

// TODO: ADD STYLING
// TODO: EXTRACT RADIO_BUTTON(maybe with label) IN ANOTHER MOLECULE/ATOM
// TODO: VISIBILITY HIDDEN CHECKBOX

export const TodosFilter = () => {
  const filter = useSelector(state => state.todosFilter)

  const dispatch = useDispatch()
  const changeFilter = e => dispatch(actions.change(e.target.value))

  return (
    <form>
      <fieldset>
        <legend>Filter todos</legend>
        <input
          id="all"
          checked={filter === filterTypes.ALL}
          type="radio"
          value={filterTypes.ALL}
          onChange={changeFilter}
        />
        <label htmlFor="all">all</label>
        <input
          id="completed"
          checked={filter === filterTypes.COMPLETED}
          type="radio"
          value={filterTypes.COMPLETED}
          onChange={changeFilter}
        />
        <label htmlFor="completed">completed</label>
        <input
          id="not_completed"
          checked={filter === filterTypes.NOT_COMPLTED}
          type="radio"
          value={filterTypes.NOT_COMPLTED}
          onChange={changeFilter}
        />
        <label htmlFor="not_completed">not completed</label>
      </fieldset>
    </form>
  )
}
