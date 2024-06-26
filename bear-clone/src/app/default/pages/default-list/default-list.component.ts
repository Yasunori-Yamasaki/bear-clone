import { ChangeDetectionStrategy, Component } from "@angular/core";
import { NotSelectedComponent } from "@components/not-selected/not-selected.component";
import { NoteListComponent } from "@components/note-list/note-list.component";
import { Store } from "@ngrx/store";
import { selectAllPublicNotes } from "@selectors/note.selectors";

@Component({
  selector: "app-default-list",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NoteListComponent, NotSelectedComponent],
  templateUrl: "./default-list.component.html",
  host: {
    class: "grid grid-cols-noteList",
  },
})
export class DefaultListComponent {
  protected publicNotes = this.store.selectSignal(selectAllPublicNotes);

  constructor(private store: Store) {}
}
