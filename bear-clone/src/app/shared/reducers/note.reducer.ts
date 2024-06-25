import { NoteLocalStorageActions, NotePageActions } from "@actions/note.actions";
import { State, initialState } from "@models/note.model";
import { createReducer, on } from "@ngrx/store";

export const noteFeatureKey = "note";

export const noteReducer = createReducer<State>(
  initialState,
  on(NoteLocalStorageActions.getInitialNotesSuccess, (state, { allNotes }) => {
    return { ...state, notes: allNotes };
  }),
  on(NoteLocalStorageActions.addNotesSuccess, (state, { newNote }) => {
    return { ...state, notes: [...state.notes, newNote] };
  }),
  on(NoteLocalStorageActions.removeNotesSuccess, (state, { newNotes }) => {
    return { ...state, notes: newNotes };
  }),
  on(NoteLocalStorageActions.updateNotesSuccess, (state, { newNotes }) => {
    return { ...state, notes: newNotes };
  }),
  on(NotePageActions.updateSelectedNote, (state, { newNote }) => {
    return { ...state, selectedNote: newNote };
  }),
  on(NotePageActions.resetSelectedNote, (state) => {
    return { ...state, selectedNote: null };
  }),
  on(NotePageActions.setSelectedNote, (state, { noteId, notes }) => {
    const targetNote = notes.find((note) => note.id === noteId);
    if (!targetNote) return state;

    return { ...state, selectedNote: targetNote };
  })
);
