import { isDevMode } from "@angular/core";
import { ActionReducerMap, MetaReducer } from "@ngrx/store";
import { noteFeatureKey, noteReducer } from "./note.reducer";
import { Note } from "../models/note.model";

export interface State {
  [noteFeatureKey]: Note[];
}

export const reducers: ActionReducerMap<State> = {
  [noteFeatureKey]: noteReducer,
};

export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
