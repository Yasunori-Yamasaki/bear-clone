import { ChangeDetectionStrategy, Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { NoteListComponent } from "../../../shared/components/note-list/note-list.component";
import { selectAllTodayNotes } from "../../../shared/selectors/note.selectors";

@Component({
  selector: "app-today-list",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NoteListComponent],
  templateUrl: "./today-list.component.html",
})
export class TodayListComponent {
  protected todayNotes = this.store.selectSignal(selectAllTodayNotes);

  constructor(private store: Store) {}
}
