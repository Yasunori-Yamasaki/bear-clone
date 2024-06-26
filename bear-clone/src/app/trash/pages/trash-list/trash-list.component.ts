import { ChangeDetectionStrategy, Component } from "@angular/core";
import { NotSelectedComponent } from "@components/not-selected/not-selected.component";
import { NoteListComponent } from "@components/note-list/note-list.component";
import { Store } from "@ngrx/store";
import { selectAllDeletedNotes } from "@selectors/note.selectors";

@Component({
  selector: "app-trash-list",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NoteListComponent, NotSelectedComponent],
  templateUrl: "./trash-list.component.html",
  host: {
    class: "grid grid-cols-noteList",
  },
})
export class TrashListComponent {
  protected trashedNotes = this.store.selectSignal(selectAllDeletedNotes);

  constructor(private store: Store) {}
}
