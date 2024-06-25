import { initialState } from "@models/category.model";
import { createReducer } from "@ngrx/store";

export const categoryFeatureKey = "category";

export const categoryReducer = createReducer(initialState);
