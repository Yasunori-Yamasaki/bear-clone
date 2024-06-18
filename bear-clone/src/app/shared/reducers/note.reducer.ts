import { createReducer, on } from "@ngrx/store";
import { initialState } from "../models/note.model";
import { NoteActions } from "../actions/note.actions";

export const noteFeatureKey = "note";

export const noteReducer = createReducer(
  initialState,
  on(NoteActions.addNotes, (state, note) => [...state, note]),
  on(NoteActions.removeNotes, (state, { noteId }) =>
    state.map((note) => {
      if (note.id !== noteId) return note;

      return {
        ...note,
        isDeleted: true,
      };
    })
  )
);
