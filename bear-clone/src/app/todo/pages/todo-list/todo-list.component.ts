import { ChangeDetectionStrategy, Component } from "@angular/core";
import { NotSelectedComponent } from "@components/not-selected/not-selected.component";
import { NoteListComponent } from "@components/note-list/note-list.component";
import { Store } from "@ngrx/store";
import { selectAllTodoNotes } from "@selectors/note.selectors";

@Component({
  selector: "app-todo-list",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NoteListComponent, NotSelectedComponent],
  templateUrl: "./todo-list.component.html",
  host: {
    class: "grid grid-cols-noteList",
  },
})
export class TodoListComponent {
  protected todoNotes = this.store.selectSignal(selectAllTodoNotes);

  constructor(private store: Store) {}
}
