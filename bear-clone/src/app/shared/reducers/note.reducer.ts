import { createReducer, on } from "@ngrx/store";
import { Note, initialState } from "../models/note.model";
import { NoteActions } from "../actions/note.actions";
import dayjs from "dayjs";
import { LocalStorageService } from "../services/local-storage.service";

const localStorageService = new LocalStorageService();

export const noteFeatureKey = "note";

export const noteReducer = createReducer(
  initialState(),
  on(NoteActions.addNotes, (_, { newNotes }) => newNotes),
  on(NoteActions.removeNotes, (state, { noteId }) => {
    const newNotes = state.map((note) => {
      if (note.id !== noteId) return note;

      return {
        ...note,
        isDeleted: true,
      };
    });

    localStorageService.save(newNotes);
    return newNotes;
  }),
  on(NoteActions.updateNotes, (state, { newNote }) => {
    const newNotes = state.map((note) => {
      if (newNote.id !== note.id) return note;

      return newNote;
    });

    localStorageService.save(newNotes);
    return newNotes;
  })
);
