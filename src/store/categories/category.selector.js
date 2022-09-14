import { createSelector } from "reselect";

const selectCategoryReducer = (state) => state.categories;

export const selectCategoriesSelect = createSelector(
  [selectCategoryReducer],
  (categorySlice) => categorySlice.categories
);

export const selectCategories = createSelector(
  [selectCategoriesSelect],
  (categories) =>
    categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {})
);

export const selectCategoriesIsLoading = createSelector(
  [selectCategoryReducer],
  (categorySlice) => categorySlice.isLoading
);
