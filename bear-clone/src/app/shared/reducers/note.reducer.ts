import { createReducer, on } from "@ngrx/store";
import { Note, initialState } from "../models/note.model";
import { NoteActions } from "../actions/note.actions";
import dayjs from "dayjs";
import { LocalStorageService } from "../services/local-storage.service";

const localStorageService = new LocalStorageService();

export const noteFeatureKey = "note";

export const noteReducer = createReducer(
  initialState(),
  on(NoteActions.addNotesSuccess, (_, { newNotes }) => newNotes),
  on(NoteActions.removeNotes, (_, { newNotes }) => newNotes),
  on(NoteActions.updateNotes, (_, { newNotes }) => newNotes)
);
