import { ChangeDetectionStrategy, Component } from "@angular/core";
import { selectAllTodayNotes, selectSelectedNote } from "@selectors/note.selectors";
import { ActivatedRoute } from "@angular/router";
import { Store } from "@ngrx/store";
import { NoteActions } from "@actions/note.actions";
import { EditorComponent } from "@components/editor/editor.component";
import { NoteListComponent } from "@components/note-list/note-list.component";

@Component({
  selector: "app-selected",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NoteListComponent, EditorComponent],
  templateUrl: "./selected.component.html",
  host: {
    class: "grid grid-cols-noteList",
  },
})
export class SelectedComponent {
  protected todayNotes = this.store.selectSignal(selectAllTodayNotes);
  protected selectedNote = this.store.selectSignal(selectSelectedNote);

  constructor(
    private route: ActivatedRoute,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const noteId = params["id"];

      this.store.dispatch(NoteActions.setSelectedNote({ noteId, notes: this.todayNotes() }));
    });
  }

  ngOnDestroy(): void {
    this.store.dispatch(NoteActions.resetSelectedNote());
  }
}
