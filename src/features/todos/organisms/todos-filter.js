import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { styled } from 'linaria/react'

import { actions, filterTypes } from '../symbiotes/filter'

import { RadioButton } from '../molecules'

export const TodosFilter = () => {
  const filter = useSelector(state => state.todosFilter)

  const dispatch = useDispatch()
  const changeFilter = e => dispatch(actions.change(e.target.value))

  return (
    <Container>
      <RadioButton
        id="all"
        checked={filter === filterTypes.ALL}
        type="radio"
        value={filterTypes.ALL}
        onChange={changeFilter}
      >
        all
      </RadioButton>
      <RadioButton
        id="done"
        checked={filter === filterTypes.COMPLETED}
        type="radio"
        value={filterTypes.COMPLETED}
        onChange={changeFilter}
      >
        done
      </RadioButton>
      <RadioButton
        id="active"
        checked={filter === filterTypes.NOT_COMPLTED}
        type="radio"
        value={filterTypes.NOT_COMPLTED}
        onChange={changeFilter}
      >
        active
      </RadioButton>
    </Container>
  )
}

const Container = styled.form`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`
