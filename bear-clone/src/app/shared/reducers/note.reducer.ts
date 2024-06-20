import { createReducer, on } from "@ngrx/store";
import { Note, initialState } from "../models/note.model";
import { NoteActions } from "../actions/note.actions";

export const noteFeatureKey = "note";

export const noteReducer = createReducer<Note[]>(
  initialState,
  on(NoteActions.getInitialNotesSuccess, (_, { allNotes }) => allNotes),
  on(NoteActions.addNotesSuccess, (_, { newNotes }) => newNotes),
  on(NoteActions.removeNotesSuccess, (_, { newNotes }) => newNotes),
  on(NoteActions.updateNotesSuccess, (_, { newNotes }) => newNotes)
);
