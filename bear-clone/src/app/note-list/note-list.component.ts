import { ChangeDetectionStrategy, Component, Input, computed, output, signal } from "@angular/core";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { CommonModule } from "@angular/common";
import { Store } from "@ngrx/store";
import { selectAllNotes, selectAllPublicNotes } from "../shared/selectors/note.selectors";
import { SearchBoxComponent } from "./search-box/search-box.component";
import { CreateAndSearchBtnComponent } from "../create-and-search-btn/create-and-search-btn.component";
import { NoteItemComponent } from "./note-item/note-item.component";
import { Note } from "../shared/models/note.model";
import { NoteActions } from "../shared/actions/note.actions";
import dayjs from "dayjs";

@Component({
  selector: "app-note-list",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    FontAwesomeModule,
    CommonModule,
    SearchBoxComponent,
    CreateAndSearchBtnComponent,
    NoteItemComponent,
  ],
  templateUrl: "./note-list.component.html",
})
export class NoteListComponent {
  @Input({ required: true }) selectedNote!: Note | null;
  select = output<Note | null>();
  trash = output<void>();

  protected isSearchMode = signal(false);
  protected allNotes = this.store.selectSignal(selectAllNotes);
  protected notes = this.store.selectSignal(selectAllPublicNotes);
  protected inputVal = signal("");
  /**
   * メモ一覧のフィルタリング処理
   */
  protected filteredNotes = computed(() => {
    if (this.inputVal() === "") return this.notes();

    return this.notes().filter(
      ({ title, content }) => title.includes(this.inputVal()) || content.includes(this.inputVal())
    );
  });

  constructor(private store: Store) {}

  /**
   * Storeに新規メモを追加 ＆ 新規メモを選択状態にする
   */
  add(): void {
    this.store.dispatch(NoteActions.addNotes());
    this.select.emit(this.notes()[this.notes().length - 1]);
  }

  /**
   * Storeから該当メモを削除
   * @param noteId 削除対象メモID
   */
  remove(noteId: string): void {
    const newNotes = this.allNotes().map((note) => {
      if (note.id !== noteId) return note;

      return {
        ...note,
        isDeleted: true,
      };
    });
    this.store.dispatch(NoteActions.removeNotes({ newNotes }));

    if (noteId === this.selectedNote?.id) {
      this.select.emit(null);
    }
  }
}
