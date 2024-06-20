import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { Note } from "../models/note.model";
import { ContentChange } from "ngx-quill";

export const NoteActions = createActionGroup({
  source: "Note Local Storage",
  events: {
    "Add Notes": emptyProps(),
    "Add Notes Success": props<{ newNotes: Note[] }>(),
    "Remove Notes": props<{ noteId: Note["id"] }>(),
    "Remove Notes Success": props<{ newNotes: Note[] }>(),
    "Update Notes": props<{
      noteId: Note["id"];
      html: ContentChange["html"];
      text: ContentChange["text"];
    }>(),
    "Update Notes Success": props<{ newNotes: Note[] }>(),
  },
});
