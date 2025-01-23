import { applyMiddleware, compose, createStore } from 'redux'
import logger from 'redux-logger'
import { rootReducer } from './root-reducer'

const loggerMiddleware = store => next => action => {
  // curried function
  if (!action.type) {
    console.log('Invalid action')
    return next(action)
  }
  console.log('type:', action.type)
  console.log('payload:', action.payload)
  console.log('current state:', store.getState())
  next(action)
  console.log('next state:', store.getState())
}

//root-reducer
const middlewares = [logger, loggerMiddleware]
const composeEnhancers = compose(applyMiddleware(...middlewares))
export const store = createStore(rootReducer, undefined, composeEnhancers)
