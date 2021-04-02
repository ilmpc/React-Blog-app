import { createStore } from 'redux'
import { createBrowserHistory } from 'history'
import { createRootReducer } from './root-reducer'

export const history = createBrowserHistory()

export const store = createStore(
  createRootReducer(history),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
