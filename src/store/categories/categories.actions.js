import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils"
import { createAction } from "../../utils/reducer/reducer.utils"
import { CATEGORIES_ACTION_TYPES } from "./categorires.types"

export const fetchCategoriesStart = () =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START)

export const fetchCategoriesSuccess = (categories) =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, categories)

export const fetchCategoriesFailure = (error) =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILURE, error)

export const fetchCategoriesStartAsync = async (dispatch) => {
  dispatch(fetchCategoriesStart())
  try {
    const categories = await getCategoriesAndDocuments()
    const categoriesToArray = Object.entries(categories).map(
      ([key, value]) => ({
        category: key,
        ...value,
      })
    )
    dispatch(fetchCategoriesSuccess(categoriesToArray))
  } catch (error) {
    dispatch(fetchCategoriesFailure(error))
  }
}