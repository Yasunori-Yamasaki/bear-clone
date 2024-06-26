import { isDevMode } from "@angular/core";
import { State as CategoryState } from "@models/category.model";
import { State as NoteState } from "@models/note.model";
import { ActionReducerMap, MetaReducer } from "@ngrx/store";
import { categoryFeatureKey, categoryReducer } from "./category.reducer";
import { noteFeatureKey, noteReducer } from "./note.reducer";

export interface State {
  [noteFeatureKey]: NoteState;
  [categoryFeatureKey]: CategoryState;
}

export const reducers: ActionReducerMap<State> = {
  [noteFeatureKey]: noteReducer,
  [categoryFeatureKey]: categoryReducer,
};

export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
