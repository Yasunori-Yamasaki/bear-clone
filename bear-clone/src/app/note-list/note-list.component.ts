import { ChangeDetectionStrategy, Component, computed, signal } from "@angular/core";
import { faMagnifyingGlass, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { CommonModule } from "@angular/common";
import dayjs from "dayjs";
import { Store } from "@ngrx/store";
import { selectAllPublicNotes } from "../shared/selectors/note.selectors";
import { SearchBoxComponent } from "./search-box/search-box.component";
import { CreateAndSearchBtnComponent } from "../create-and-search-btn/create-and-search-btn.component";

type Note = {
  title: string;
  content: string;
  updatedAt: string;
};

@Component({
  selector: "app-note-list",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FontAwesomeModule, CommonModule, SearchBoxComponent, CreateAndSearchBtnComponent],
  templateUrl: "./note-list.component.html",
})
export class NoteListComponent {
  protected faMagnifyingGlass = faMagnifyingGlass;
  protected faPenToSquare = faPenToSquare;
  protected faCircleXmark = faCircleXmark;

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

  /**
   * メモの更新日時を現在との時間差によって下記にフォーマットする。
   * - 1分以内：~~ seconds ago
   * - 1時間以内：~~ minutes ago
   * - 1日以内：~~ hours ago
   * - 1日以上：ex.) Jun 13
   * @param baseDateStr メモの更新日時
   * @returns フォーマット後の更新日時
   */
  formatUpdateAt(baseDateStr: string): string {
    const baseDate = dayjs(baseDateStr);
    const now = dayjs();
    const oneMinuteAgo = now.subtract(1, "minute");
    const oneHourAgo = now.subtract(1, "hour");
    const oneDayAgo = now.subtract(1, "day");

    if (baseDate.isAfter(oneMinuteAgo) && baseDate.isBefore(now)) {
      const diffSec = now.diff(baseDate, "second");
      return `${diffSec} seconds ago`;
    }

    if (baseDate.isAfter(oneHourAgo) && baseDate.isBefore(oneMinuteAgo)) {
      const diffMinutes = now.diff(baseDate, "minute");
      return `${diffMinutes} minutes ago`;
    }

    if (baseDate.isAfter(oneDayAgo) && baseDate.isBefore(oneHourAgo)) {
      const diffHours = now.diff(baseDate, "hour");
      return `${diffHours} hours ago`;
    }

    return baseDate.format("MMM D");
  }
}
