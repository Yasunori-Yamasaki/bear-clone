import { NotePageActions } from "@actions/note.actions";
import { ChangeDetectionStrategy, Component, DestroyRef, inject } from "@angular/core";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { ActivatedRoute } from "@angular/router";
import { EditorComponent } from "@components/editor/editor.component";
import { NoteListComponent } from "@components/note-list/note-list.component";
import { Store } from "@ngrx/store";
import { selectAllTodoNotes, selectSelectedNote } from "@selectors/note.selectors";

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
  protected todoNotes = this.store.selectSignal(selectAllTodoNotes);
  protected selectedNote = this.store.selectSignal(selectSelectedNote);

  private destroyRef = inject(DestroyRef);

  constructor(
    private route: ActivatedRoute,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.route.params.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((params) => {
      const noteId = params["id"];

      this.store.dispatch(NotePageActions.setSelectedNote({ noteId, notes: this.todoNotes() }));
    });
  }

  ngOnDestroy(): void {
    this.store.dispatch(NotePageActions.resetSelectedNote());
  }
}
