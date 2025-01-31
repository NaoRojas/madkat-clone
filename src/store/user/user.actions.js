import { USER_ACTIONS_TYPES } from "../../context/user.context";
import { createAction } from "../../utils/reducer/reducer.utils";

export const setCurrentUser = (user) =>
  createAction(USER_ACTIONS_TYPES.SET_CURRENT_USER, user)
