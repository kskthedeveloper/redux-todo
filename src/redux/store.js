import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducer/reducer'

let preloadedState
const persistedTodosString = localStorage.getItem('todos')

if (persistedTodosString) {
  preloadedState = {
    todos: JSON.parse(persistedTodosString)
  }
}


const composedEnhancer = composeWithDevTools(
  applyMiddleware()
)

const store = createStore(
  rootReducer,
  preloadedState,
  composedEnhancer
  );
export default store;
