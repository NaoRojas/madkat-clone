export const loggerMiddleware = store => next => action => {
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