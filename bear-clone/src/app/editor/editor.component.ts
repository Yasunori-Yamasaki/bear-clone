import { Component, Input, output } from "@angular/core";
import { ContentChange, QuillModule, QuillModules } from "ngx-quill";
import { Note } from "../shared/models/note.model";
import { FormsModule } from "@angular/forms";
import dayjs from "dayjs";
import { Store } from "@ngrx/store";
import { NoteActions } from "../shared/actions/note.actions";

@Component({
  selector: "app-editor",
  standalone: true,
  imports: [QuillModule, FormsModule],
  templateUrl: "./editor.component.html",
  host: {
    class: "relative",
  },
})
export class EditorComponent {
  @Input({ required: true }) note!: Note | null;
  protected contentChange = output<ContentChange>();

  protected modules: QuillModules = {
    toolbar: "#toolbar",
  };

  constructor(private store: Store) {}

  /**
   * ローカルストレージ内の該当メモデータを更新
   * @param event リッチエディタのコンテンツ内容変更イベント
   */
  update(event: ContentChange): void {
    if (!this.note) return;

    const newNote = this.setNewNote(this.note, event);
    this.store.dispatch(NoteActions.updateNotes({ newNote }));
  }

  /**
   * 内容更新後のメモデータ成形処理
   *
   * @param oldNote 旧メモデータ
   * @param -{html, text} リッチエディタのコンテンツ内容変更イベント
   * @returns 内容更新後のメモデータ
   */
  setNewNote(oldNote: Note, { html, text }: ContentChange): Note {
    return {
      ...oldNote,
      title: text.split("\n")[0],
      content: text.split("\n").slice(1).join(""),
      htmlText: html ?? "",
      updatedAt: dayjs().format("YYYY-MM-DD HH:mm:ss"),
    };
  }
}
