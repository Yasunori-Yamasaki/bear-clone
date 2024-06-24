import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { ContentChange, QuillModule, QuillModules } from "ngx-quill";
import { Note } from "../../models/note.model";
import { FormsModule } from "@angular/forms";
import { Store } from "@ngrx/store";
import { NoteActions } from "../../actions/note.actions";
import { CategoryService } from "../../services/category.service";
import { AsyncPipe } from "@angular/common";

@Component({
  selector: "app-editor",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AsyncPipe, QuillModule, FormsModule],
  templateUrl: "./editor.component.html",
  host: {
    class: "relative",
  },
})
export class EditorComponent {
  @Input({ required: true }) note!: Note | null;
  @Input() readOnly = false;

  protected modules: QuillModules = {
    toolbar: "#toolbar",
  };

  constructor(
    private store: Store,
    protected categoryService: CategoryService
  ) {}

  /**
   * ローカルストレージ内の該当メモデータを更新
   * @param event リッチエディタのコンテンツ内容変更イベント
   */
  update({ html, text }: ContentChange): void {
    if (!this.note) return;

    this.store.dispatch(NoteActions.updateNotes({ noteId: this.note.id, html, text }));
  }
}
