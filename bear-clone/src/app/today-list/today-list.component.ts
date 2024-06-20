import { Component } from "@angular/core";
import { NoteListComponent } from "../note-list/note-list.component";
import { Store } from "@ngrx/store";
import { selectAllTodayNotes } from "../shared/selectors/note.selectors";

@Component({
  selector: "app-today-list",
  standalone: true,
  imports: [NoteListComponent],
  templateUrl: "./today-list.component.html",
})
export class TodayListComponent {
  protected todayNotes = this.store.selectSignal(selectAllTodayNotes);

  constructor(private store: Store) {}
}
