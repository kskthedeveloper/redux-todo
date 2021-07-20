import React from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import TodoListItem from './TodoListItem'
import { StatusFilters } from '../redux/reducer/filterSlice'

const selectTodoIds = (state) => state.todos.map((todo) => todo.id)
const selectFilteredTodoIds = (state) => state.todos
  .filter((todo) => {
    switch (state.filters.status) {
      case StatusFilters.Active:
        if(!todo.completed)
          return todo;
        break;
      case StatusFilters.Completed:
        if(todo.completed)
          return todo;
        break;
      default:
        return todo
    }
  })
  .filter((todo) => {
    if(state.filters.colors.length <= 0) {
      return todo;
    }
    if(state.filters.colors.includes(todo.color))
      return todo;
  })
  .map((todo) => todo.id)

const TodoList = () => {
  // const todoIds = useSelector(selectTodoIds, shallowEqual)
  const filterTodo = useSelector(selectFilteredTodoIds, shallowEqual)

  const renderedListItems = filterTodo.map((todoId) => {
    return <TodoListItem key={todoId} id={todoId} />
  })

  return <ul className="todo-list">{renderedListItems}</ul>
}

export default TodoList
