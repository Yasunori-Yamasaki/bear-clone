import { ChangeDetectionStrategy, Component } from "@angular/core";
import { NoteListComponent } from "@components/note-list/note-list.component";
import { selectAllTodoNotes } from "@selectors/note.selectors";
import { Store } from "@ngrx/store";

@Component({
  selector: "app-todo-list",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NoteListComponent],
  templateUrl: "./todo-list.component.html",
  host: {
    class: "grid grid-cols-noteList",
  },
})
export class TodoListComponent {
  protected todoNotes = this.store.selectSignal(selectAllTodoNotes);

  constructor(private store: Store) {}
}
