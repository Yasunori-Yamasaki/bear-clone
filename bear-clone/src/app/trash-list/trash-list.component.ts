import { Component, Input, output } from "@angular/core";
import { NoteListComponent } from "../note-list/note-list.component";
import { Note } from "../shared/models/note.model";
import { Store } from "@ngrx/store";
import { selectAllDeletedNotes } from "../shared/selectors/note.selectors";

@Component({
  selector: "app-trash-list",
  standalone: true,
  imports: [NoteListComponent],
  templateUrl: "./trash-list.component.html",
})
export class TrashListComponent {
  @Input({ required: true }) selectedNote!: Note | null;
  select = output<Note | null>();

  protected trashedNotes = this.store.selectSignal(selectAllDeletedNotes);

  constructor(private store: Store) {}
}
