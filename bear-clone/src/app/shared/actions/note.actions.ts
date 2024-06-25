import { Note } from "@models/note.model";
import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { ContentChange } from "ngx-quill";

export const NoteActions = createActionGroup({
  source: "Note Local Storage",
  events: {
    "Get Initial Notes": emptyProps(),
    "Get Initial Notes Success": props<{ allNotes: Note[] }>(),
    "Add Notes": emptyProps(),
    "Add Notes Success": props<{ newNote: Note }>(),
    "Remove Notes": props<{ noteId: Note["id"]; selectedNoteId: Note["id"] }>(),
    "Remove Notes Success": props<{
      newNotes: Note[];
      deletedNote: Note;
      selectedNoteId: Note["id"];
    }>(),
    "Update Notes": props<{
      noteId: Note["id"];
      html: ContentChange["html"];
      text: ContentChange["text"];
    }>(),
    "Update Notes Success": props<{ newNotes: Note[] }>(),
    "Update Selected Note": props<{ newNote: Note }>(),
    "Reset Selected Note": emptyProps(),
    "Set Selected Note": props<{ noteId: string; notes: Note[] }>(),
  },
});
