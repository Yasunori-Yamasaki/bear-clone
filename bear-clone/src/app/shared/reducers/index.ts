import { isDevMode } from "@angular/core";
import { ActionReducerMap, MetaReducer } from "@ngrx/store";
import { noteFeatureKey, noteReducer } from "./note.reducer";
import { State as NoteState } from "../models/note.model";

export interface State {
  [noteFeatureKey]: NoteState;
}

export const reducers: ActionReducerMap<State> = {
  [noteFeatureKey]: noteReducer,
};

export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
