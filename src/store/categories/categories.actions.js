import { createAction } from "../../utils/reducer/reducer.utils";
import { CATEGORIES_ACTION_TYPES } from "./categorires.types";

export const setCategories = (user) =>
  createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, user)
