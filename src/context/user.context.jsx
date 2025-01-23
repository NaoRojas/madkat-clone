import { createContext, useEffect, useState, useReducer } from 'react'
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from '../utils/firebase/firebase.utils'

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
})

export const USER_ACTIONS_TYPES = {
  SET_CURRENT_USER: 'SET_CURRENT_USER',
}

const userReducer = (state, action) => {
  console.log('action', action)
  const { type, payload } = action
  switch (type) {
    case USER_ACTIONS_TYPES.SET_CURRENT_USER:
      return { ...state, currentUser: payload }
    default:
      return state
  }
}

const INITIAL_STATE = {
  currentUser: null,
}

export const UserProvider = ({ children }) => {
  // const [currentUser, setCurrentUser] = useState(null)
  const [state, dispatch] = useReducer(userReducer, INITIAL_STATE)
  // const value = { currentUser, setCurrentUser }
  const { currentUser } = state
  const value = { currentUser, dispatch }

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user)
      }
      dispatch({ type: USER_ACTIONS_TYPES.SET_CURRENT_USER, payload: user })
    })

    return () => unsubscribe()
  }, [])

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
