import { applyMiddleware, compose, createStore } from 'redux'
import { rootReducer } from './root-reducer'
import { persistStore, persistReducer } from 'redux-persist'
import { loggerMiddleware } from './middleware/logger'
import storage from 'redux-persist/lib/storage'
import logger from 'redux-logger'
import { thunk } from 'redux-thunk'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

//root-reducer
const middlewares = [process.env.NODE_ENV === 'development' && logger, thunk, loggerMiddleware].filter(Boolean)
// What is the purpose of the filter(Boolean) method in the middlewares array?
// The filter(Boolean) method removes any falsy values from the middlewares array. 
// In this case, the filter method removes any undefined values from the array.
// 
// This is necessary because the loggerMiddleware is only added to the middlewares array if the process.env.NODE_ENV is 'development' 
// and the logger is available. If the logger is not available, the loggerMiddleware is not added to the middlewares array, 
// and the filter method removes the undefined value from the array.
const composeEnhancers = compose(applyMiddleware(...middlewares))
export const store = createStore(persistedReducer, undefined, composeEnhancers)
export const persistor = persistStore(store)