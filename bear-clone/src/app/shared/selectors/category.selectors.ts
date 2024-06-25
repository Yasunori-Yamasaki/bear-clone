import { State } from "@models/category.model";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { categoryFeatureKey } from "@reducers/category.reducer";

export const selectCategoryState = createFeatureSelector<State>(categoryFeatureKey);

export const selectSelectedCategory = createSelector(
  selectCategoryState,
  ({ selectedCategory }) => selectedCategory
);
