import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import chanels from './chanels'
import users from './users'

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    chanels,
    users
  })

export default createRootReducer
