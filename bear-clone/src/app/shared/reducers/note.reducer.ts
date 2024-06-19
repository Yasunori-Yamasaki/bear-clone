import { createReducer, on } from "@ngrx/store";
import { initialState } from "../models/note.model";
import { NoteActions } from "../actions/note.actions";

export const noteFeatureKey = "note";

export const noteReducer = createReducer(
  initialState(),
  on(NoteActions.addNotesSuccess, (_, { newNotes }) => newNotes),
  on(NoteActions.removeNotesSuccess, (_, { newNotes }) => newNotes),
  on(NoteActions.updateNotesSuccess, (_, { newNotes }) => newNotes)
);
