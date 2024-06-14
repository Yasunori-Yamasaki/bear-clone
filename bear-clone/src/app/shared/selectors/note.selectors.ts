import { createFeatureSelector, createSelector } from "@ngrx/store";
import { noteFeatureKey } from "../reducers/note.reducer";
import { Note } from "../models/note.model";

export const selectNotesState = createFeatureSelector<Note[]>(noteFeatureKey);

export const selectAllNotes = createSelector(selectNotesState, (state) => state);
