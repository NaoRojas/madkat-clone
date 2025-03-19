import { USER_ACTIONS_TYPES } from "../../context/user.context";
import { createAction } from "../../utils/reducer/reducer.utils";

export const setCurrentUser = (user) =>
  createAction(USER_ACTIONS_TYPES.SET_CURRENT_USER, user)


export const checkUserSession = () => createAction(USER_ACTIONS_TYPES.CHECK_USER_SESSION)

export const googleSignInStart = () => createAction(USER_ACTIONS_TYPES.GOOGLE_SIGN_IN_START)

export const emailSignInStart = (emailAndPassword) =>
  createAction(USER_ACTIONS_TYPES.EMAIL_SIGN_IN_START, emailAndPassword)

export const signInSuccess = (user) => createAction(USER_ACTIONS_TYPES.SIGN_IN_SUCCESS, user)

export const signInFailure = (error) => createAction(USER_ACTIONS_TYPES.SIGN_IN_FAILURE, error)