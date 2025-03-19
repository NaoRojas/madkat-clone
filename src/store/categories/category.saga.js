import { takeLatest, all, call, put } from 'redux-saga/effects'
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils'
import { fetchCategoriesFailure, fetchCategoriesStart, fetchCategoriesSuccess } from './categories.actions'
import { CATEGORIES_ACTION_TYPES } from './categorires.types'

// export const fetchCategoriesStartAsync = () => {
//   return async (dispatch) => {
//     dispatch(fetchCategoriesStart())
//     try {
//       const categories = await getCategoriesAndDocuments()
//       const categoriesToArray = Object.entries(categories).map(([key, value]) => ({
//         category: key,
//         ...value,
//       }))
//       dispatch(fetchCategoriesSuccess(categoriesToArray))
//     } catch (error) {
//       dispatch(fetchCategoriesFailure(error))
//     }
//   }
// }

export function* fetchCategoriesStartAsync() {
  try {
    const categories = yield getCategoriesAndDocuments()
    const categoriesToArray = Object.entries(categories).map(([key, value]) => ({
      category: key,
      ...value,
    }))
    yield put(fetchCategoriesSuccess(categoriesToArray))
  } catch (error) {
    yield put(fetchCategoriesFailure(error))
  }
}

//generator function
export function* onFetchCategories() {
  yield takeLatest(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START,
    fetchCategoriesStartAsync
  )
  // takeLatest means if your hear a bunch of the same action give me the latest one.

}

export function* categoriesSaga() {
  yield all([
    call(onFetchCategories)
  ])
  // Is an effect that it says everything inside and only complete when all of them is done 
  // So is going to execute this, and any further that we have down here, don't happen until 
  // the yield all is finishes, (So is a pause essentially) 
  // -- So it will wait for all of the functions to finish before moving on to the next line of code
}