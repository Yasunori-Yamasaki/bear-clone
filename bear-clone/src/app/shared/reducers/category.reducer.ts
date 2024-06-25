import { CategoryActions } from "@actions/category.actions";
import { initialState } from "@models/category.model";
import { createReducer, on } from "@ngrx/store";

export const categoryFeatureKey = "category";

export const categoryReducer = createReducer(
  initialState,
  on(CategoryActions.changeCategory, (_, { category }) => {
    return {
      selectedCategory: category,
    };
  })
);
