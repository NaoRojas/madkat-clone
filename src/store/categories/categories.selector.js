import { createSelector } from "reselect"

export const selectCategoriesReducer = (state) => state.categories

export const selectCategories = createSelector(
  [selectCategoriesReducer],
  (categories) => categories.categories
)

export const selectCategoriesIsLoading = createSelector(
  [selectCategoriesReducer],
  (categories) => categories.isLoading
)
