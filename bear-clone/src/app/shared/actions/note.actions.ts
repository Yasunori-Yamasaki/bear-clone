import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { Note } from "../models/note.model";
import { ContentChange } from "ngx-quill";

export const NoteActions = createActionGroup({
  source: "Note",
  events: {
    "Add Notes": props<{ newNotes: Note[] }>(),
    "Remove Notes": props<{ noteId: string }>(),
    "Update Notes": props<{ newNote: Note }>(),
  },
});
