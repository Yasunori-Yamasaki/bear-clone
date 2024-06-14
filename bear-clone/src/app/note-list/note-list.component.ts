import { ChangeDetectionStrategy, Component, computed, signal } from "@angular/core";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { CommonModule } from "@angular/common";
import { Store } from "@ngrx/store";
import { selectAllPublicNotes } from "../shared/selectors/note.selectors";
import { SearchBoxComponent } from "./search-box/search-box.component";
import { CreateAndSearchBtnComponent } from "../create-and-search-btn/create-and-search-btn.component";
import { NoteItemComponent } from "./note-item/note-item.component";
import { Note } from "../shared/models/note.model";

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
  protected selectedNote: Note | null = null;
  protected isSearchMode = false;

  protected notes = this.store.selectSignal(selectAllPublicNotes);
  protected inputVal = signal("");
  /**
   * メモ一覧のフィルタリング処理
   * ※前提処理は search
   * @see {@link search}
   */
  protected filteredNotes = computed(() => {
    if (this.inputVal() === "") return this.notes();

    return this.notes().filter(
      ({ title, content }) => title.includes(this.inputVal()) || content.includes(this.inputVal())
    );
  });

  constructor(private store: Store) {}

  /**
   * 選択したメモデータの保持処理
   * @param note 選択済みメモデータ
   */
  selectNote(note: Note): void {
    this.selectedNote = note;
  }

  /**
   * 検索窓の表示フラグの切り替え処理
   */
  toggleSearchMode(): void {
    this.isSearchMode = !this.isSearchMode;
  }

  /**
   * 選択カテゴリ内の語句による特定メモ検索処理
   * ※ 後続処理は filteredNotes
   * @param input 検索語句
   * @see {@link filteredNotes}
   */
  search(input: string): void {
    this.inputVal.set(input);
  }
}
