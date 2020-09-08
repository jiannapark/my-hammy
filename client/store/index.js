import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import user from './user'
import hamster from './hamster'
import environment from './environment'
import food from './food'
import tracker from './tracker'
import diary from './diary'

const reducer = combineReducers({
  user,
  hamster,
  environment,
  food,
  tracker,
  diary
})
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(reducer, middleware)

export default store
export * from './user'
