import { createReducer, on } from "@ngrx/store";
import { initialState } from "../models/note.model";
import { NoteActions } from "../actions/note.actions";
import dayjs from "dayjs";

export const noteFeatureKey = "note";

export const noteReducer = createReducer(
  initialState,
  on(NoteActions.addNotes, (state) => {
    const latestId = !state.length ? 1 : parseInt(state[state.length - 1].id) + 1;
    const now = dayjs();
    const newNote = {
      id: latestId.toString(),
      title: "",
      content: "",
      tags: [],
      updatedAt: now.format("YYYY-MM-DD HH:mm:ss"),
      isDeleted: false,
    };

    return [...state, newNote];
  }),
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
