import { filterTypes } from './symbiotes/filter'

const getTodos = state => state.todos
const getFilter = state => state.todosFilter
const createFilterPredicate = filter => todo =>
  filter === filterTypes.COMPLETED ? todo.completed : !todo.completed

export const filteredTodosSelector = state => {
  const filter = getFilter(state)
  const todos = getTodos(state)

  return filter === filterTypes.ALL
    ? todos
    : todos.filter(createFilterPredicate(filter))
}
