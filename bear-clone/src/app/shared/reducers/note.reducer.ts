import { createReducer, on } from "@ngrx/store";
import { Note, initialState } from "../models/note.model";
import { NoteActions } from "../actions/note.actions";
import dayjs from "dayjs";
import { LocalStorageService } from "../services/local-storage.service";

const localStorageService = new LocalStorageService();

export const noteFeatureKey = "note";

export const noteReducer = createReducer(
  initialState(),
  on(NoteActions.addNotes, (state) => {
    const latestId = !state.length ? 1 : parseInt(state[state.length - 1].id) + 1;
    const now = dayjs();
    const newNote: Note = {
      id: latestId.toString(),
      title: "",
      content: "",
      htmlText: "",
      tags: [],
      updatedAt: now.format("YYYY-MM-DD HH:mm:ss"),
      isDeleted: false,
    };
    const newNotes = [...state, newNote];

    localStorageService.save(newNotes);
    return newNotes;
  }),
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
  on(NoteActions.updateNotes, (state, { newNote: { id, title, content, htmlText } }) => {
    const newNotes = state.map((note) => {
      if (id !== note.id) return note;

      return {
        ...note,
        title,
        content,
        htmlText,
      };
    });

    localStorageService.save(newNotes);
    return newNotes;
  })
);
