import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { selectAllPublicNotes } from "../shared/selectors/note.selectors";
import { NoteListComponent } from "../note-list/note-list.component";

@Component({
  selector: "app-default-list",
  standalone: true,
  imports: [NoteListComponent],
  templateUrl: "./default-list.component.html",
})
export class DefaultListComponent {
  protected publicNotes = this.store.selectSignal(selectAllPublicNotes);

  constructor(private store: Store) {}
}
