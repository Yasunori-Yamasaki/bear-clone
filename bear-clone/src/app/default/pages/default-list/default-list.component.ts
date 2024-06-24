import { ChangeDetectionStrategy, Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { selectAllPublicNotes } from "../../../shared/selectors/note.selectors"
import { NoteListComponent } from "../../../note-list/note-list.component";

@Component({
  selector: "app-default-list",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NoteListComponent],
  templateUrl: "./default-list.component.html",
  host: {
    class: "grid grid-cols-noteList",
  },
})
export class DefaultListComponent {
  protected publicNotes = this.store.selectSignal(selectAllPublicNotes);

  constructor(private store: Store) {}
}
