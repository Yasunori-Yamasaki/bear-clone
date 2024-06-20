import { Component, signal } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { NoteListComponent } from "./note-list/note-list.component";
import { EditorComponent } from "./editor/editor.component";
import { Note } from "./shared/models/note.model";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, NoteListComponent, EditorComponent],
  templateUrl: "./app.component.html",
  host: {
    class: "grid grid-cols-root",
  },
})
export class AppComponent {
  protected selectedNote = signal<Note | null>(null);
}
