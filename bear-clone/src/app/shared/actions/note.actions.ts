import { Note } from "@models/note.model";
import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { ContentChange } from "ngx-quill";

export const NoteLocalStorageActions = createActionGroup({
  source: "Note Local Storage",
  events: {
    // ページ訪問時の初期データ取得処理
    "Get Initial Notes": emptyProps(),
    "Get Initial Notes Success": props<{ allNotes: Note[] }>(),
    // メモ新規作成処理
    "Add Notes": emptyProps(),
    "Add Notes Success": props<{ newNote: Note }>(),
    // メモ削除処理
    "Remove Notes": props<{ noteId: Note["id"]; selectedNoteId: Note["id"] }>(),
    "Remove Notes Success": props<{
      deletedNote: Note;
      selectedNoteId: Note["id"];
    }>(),
    // メモの内容更新処理
    "Update Notes": props<{
      noteId: Note["id"];
      html: ContentChange["html"];
      text: ContentChange["text"];
    }>(),
    "Update Notes Success": props<{ updatedNote: Note }>(),
  },
});

export const NotePageActions = createActionGroup({
  source: "Note Page",
  events: {
    // メモ選択処理
    "Set Selected Note": props<{ noteId: string; notes: Note[] }>(),
    // 選択メモ変更処理
    "Update Selected Note": props<{ newNote: Note }>(),
    // メモ未選択処理
    "Reset Selected Note": emptyProps(),
  },
});
