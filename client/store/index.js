import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import user from './user'
import hamsterReducer from './hamster'
import environmentReducer from './environment'
import foodReducer from './food'
import trackerReducer from './tracker'

const reducer = combineReducers({
  user,
  hamsterReducer,
  environmentReducer,
  foodReducer,
  trackerReducer
})
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(reducer, middleware)

export default store
export * from './user'
