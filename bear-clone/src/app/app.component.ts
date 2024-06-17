import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { NoteListComponent } from "./note-list/note-list.component";
import { EditorComponent } from "./editor/editor.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, NoteListComponent, EditorComponent],
  templateUrl: "./app.component.html",
  host: {
    class: "flex",
  },
})
export class AppComponent {}
