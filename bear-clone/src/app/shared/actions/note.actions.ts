import { createActionGroup, emptyProps, props } from "@ngrx/store";

export const NoteActions = createActionGroup({
  source: "Note",
  events: {
    "Add Notes": emptyProps(),
    "Remove Notes": props<{ noteId: string }>(),
  },
});
