import { Component, OnInit, signal } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { NoteListComponent } from "./note-list/note-list.component";
import { EditorComponent } from "./editor/editor.component";
import { Note } from "./shared/models/note.model";
import { Store } from "@ngrx/store";
import { NoteActions } from "./shared/actions/note.actions";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, NoteListComponent, EditorComponent],
  templateUrl: "./app.component.html",
  host: {
    class: "grid grid-cols-root",
  },
})
export class AppComponent implements OnInit {
  protected selectedNote = signal<Note | null>(null);

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(NoteActions.getInitialNotes());
  }
}
