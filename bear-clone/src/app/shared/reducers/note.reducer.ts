import { createReducer, on } from "@ngrx/store";
import { State, initialState } from "../models/note.model";
import { NoteActions } from "../actions/note.actions";

export const noteFeatureKey = "note";

export const noteReducer = createReducer<State>(
  initialState,
  on(NoteActions.getInitialNotesSuccess, (state, { allNotes }) => {
    return { ...state, notes: allNotes };
  }),
  on(NoteActions.addNotesSuccess, (state, { newNotes }) => {
    return { ...state, notes: newNotes };
  }),
  on(NoteActions.removeNotesSuccess, (state, { newNotes }) => {
    return { ...state, notes: newNotes };
  }),
  on(NoteActions.updateNotesSuccess, (state, { newNotes }) => {
    return { ...state, notes: newNotes };
  }),
  on(NoteActions.updateSelectedNote, (state, { newNote }) => {
    return { ...state, selectedNote: newNote };
  }),
  on(NoteActions.resetSelectedNote, (state) => {
    return { ...state, selectedNote: null };
  }),
  on(NoteActions.setSelectedNote, (state, { noteId, notes }) => {
    const targetNote = notes.find((note) => note.id === noteId);
    if (!targetNote) return state;

    return { ...state, selectedNote: targetNote };
  })
);
