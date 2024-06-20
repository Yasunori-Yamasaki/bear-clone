import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { Note } from "../models/note.model";
import { ContentChange } from "ngx-quill";

export const NoteActions = createActionGroup({
  source: "Note Local Storage",
  events: {
    "Get Initial Notes": emptyProps(),
    "Get Initial Notes Success": props<{ allNotes: Note[] }>(),
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
