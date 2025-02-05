import { applyMiddleware, compose, createStore } from 'redux'
import logger from 'redux-logger'
import { rootReducer } from './root-reducer'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
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

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['user'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

//root-reducer
const middlewares = [logger, loggerMiddleware]
const composeEnhancers = compose(applyMiddleware(...middlewares))
export const store = createStore(persistedReducer, undefined, composeEnhancers)
export const persistor = persistStore(store)