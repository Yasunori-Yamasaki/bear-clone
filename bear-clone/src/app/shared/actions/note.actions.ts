import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { Note } from "../models/note.model";

export const NoteActions = createActionGroup({
  source: "Note",
  events: {
    "Add Notes": props<Note>(),
  },
});
