import { NoteLocalStorageActions } from "@actions/note.actions";
import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { SidebarComponent } from "@components/sidebar/sidebar.component";
import { Store } from "@ngrx/store";
import { selectSelectedNote } from "@selectors/note.selectors";

@Component({
  selector: "app-root",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, SidebarComponent],
  templateUrl: "./app.component.html",
  host: {
    class: "grid grid-cols-root",
  },
})
export class AppComponent implements OnInit {
  protected selectedNote = this.store.selectSignal(selectSelectedNote);

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(NoteLocalStorageActions.getInitialNotes());
  }
}
