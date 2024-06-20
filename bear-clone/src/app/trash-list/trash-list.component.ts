import { Component } from "@angular/core";
import { NoteListComponent } from "../note-list/note-list.component";
import { Store } from "@ngrx/store";
import { selectAllDeletedNotes } from "../shared/selectors/note.selectors";

@Component({
  selector: "app-trash-list",
  standalone: true,
  imports: [NoteListComponent],
  templateUrl: "./trash-list.component.html",
})
export class TrashListComponent {
  protected trashedNotes = this.store.selectSignal(selectAllDeletedNotes);

  constructor(private store: Store) {}
}
