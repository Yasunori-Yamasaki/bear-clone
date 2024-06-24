import { ChangeDetectionStrategy, Component } from "@angular/core";
import { NotSelectedComponent } from "@components/not-selected/not-selected.component";
import { NoteListComponent } from "@components/note-list/note-list.component";
import { Store } from "@ngrx/store";
import { selectAllTodayNotes } from "@selectors/note.selectors";

@Component({
  selector: "app-today-list",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NoteListComponent, NotSelectedComponent],
  templateUrl: "./today-list.component.html",
  host: {
    class: "grid grid-cols-noteList",
  },
})
export class TodayListComponent {
  protected todayNotes = this.store.selectSignal(selectAllTodayNotes);

  constructor(private store: Store) {}
}
