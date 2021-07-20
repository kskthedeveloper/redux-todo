/*
// TODO: to refactor by splitting the long reducer
const initState = {
  todos: [
    {id: 0, text: 'Todo 1', completed: true},
    {id: 1, text: 'Todo 2', completed: false, color: 'purple'},
    {id: 2, text: 'Learning Redux', completed: false},
  ],
  filters: {
    status: 'ALL',
    colors: []
  }
};

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case 'todos/todoAdded': {
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: state.todos.length,
            text: action.payload,
            complete: false
          }
        ]
      }
    }
    case 'todos/todoToggled': {
      return {
        ...state,
        todos: state.todos.map(todo => {
          if(todo.id !== action.payload) {
            return todo;
          }

          return {
            ...todo,
            completed: !todo.completed
          }
        })
      }
    }
    case 'filters/statusFilterChanged': {
      return {
        ...state,
        filters: {
          ...state.filters,
          status: action.payload
        }
      }
    }
    default:
      return state;
  }
}
 */
import { combineReducers } from 'redux'

import todosReducer from './todosSlice'
import filtersReducer from './filterSlice'

const rootReducer = combineReducers({
  todos: todosReducer,
  filters: filtersReducer
})

export default rootReducer
