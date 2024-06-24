import { NoteActions } from "@actions/note.actions";
import { CommonModule } from "@angular/common";
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  computed,
  input,
  signal,
} from "@angular/core";
import { ActivatedRoute, RouterLink } from "@angular/router";
import { CreateAndSearchBtnComponent } from "@components/create-and-search-btn/create-and-search-btn.component";
import { NoteItemComponent } from "@components/note-list/note-item/note-item.component";
import { SearchBoxComponent } from "@components/note-list/search-box/search-box.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { Note } from "@models/note.model";
import { Store } from "@ngrx/store";
import { selectSelectedNote } from "@selectors/note.selectors";

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
  @Input({ required: true }) category!: string;

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