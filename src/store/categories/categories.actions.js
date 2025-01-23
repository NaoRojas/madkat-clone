import { createAction } from "../../utils/reducer/reducer.utils";
import { CATEGORIES_ACTION_TYPES } from "./categorires.types";

export const setCategores = (user) =>
  createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, user)
