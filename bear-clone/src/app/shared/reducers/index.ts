import { isDevMode } from "@angular/core";
import { State as NoteState } from "@models/note.model";
import { ActionReducerMap, MetaReducer } from "@ngrx/store";
import { noteFeatureKey, noteReducer } from "./note.reducer";

export interface State {
  [noteFeatureKey]: NoteState;
}

export const reducers: ActionReducerMap<State> = {
  [noteFeatureKey]: noteReducer,
};

export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
