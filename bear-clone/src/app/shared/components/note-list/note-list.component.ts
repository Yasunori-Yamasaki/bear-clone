import { ChangeDetectionStrategy, Component, OnInit, computed, input, signal } from "@angular/core";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { CommonModule } from "@angular/common";
import { Store } from "@ngrx/store";
import { SearchBoxComponent } from "./search-box/search-box.component";
import { NoteItemComponent } from "./note-item/note-item.component";
import { Note } from "../../models/note.model";
import { NoteActions } from "../../actions/note.actions";
import { selectSelectedNote } from "../../selectors/note.selectors";
import { ActivatedRoute, RouterLink } from "@angular/router";
import { CreateAndSearchBtnComponent } from "../create-and-search-btn/create-and-search-btn.component";

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
    RouterLink,
  ],
  templateUrl: "./note-list.component.html",
  host: {
    class: "solid flex flex-col h-[100vh] w-60 overflow-y-auto border-r border-zinc-300",
  },
})
export class NoteListComponent implements OnInit {
  notes = input.required<Note[]>();
  protected selectedNote = this.store.selectSignal(selectSelectedNote);
  protected isSearchMode = signal(false);
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

  constructor(
    private route: ActivatedRoute,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.inputVal.set(params["search"] ?? "");

      if (!!this.inputVal()) {
        this.isSearchMode.set(true);
      }
    });
  }

  /**
   * Storeに新規メモを追加 ＆ 新規メモを選択状態にする
   */
  add(): void {
    const newNote = this.notes()[this.notes().length - 1];

    this.store.dispatch(NoteActions.addNotes());
    this.store.dispatch(NoteActions.updateSelectedNote({ newNote }));
  }
}
