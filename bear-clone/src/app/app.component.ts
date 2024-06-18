import { Component, signal } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { NoteListComponent } from "./note-list/note-list.component";
import { EditorComponent } from "./editor/editor.component";
import { Note } from "./shared/models/note.model";
import { ContentChange } from "ngx-quill";
import { Store } from "@ngrx/store";
import { NoteActions } from "./shared/actions/note.actions";
import dayjs from "dayjs";

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

  constructor(private store: Store) {}

  contentSave(event: ContentChange): void {
    const note = this.selectedNote();
    if (!note) return;

    const newNote: Note = this.setNewNote(note, event);

    this.store.dispatch(NoteActions.updateNotes({ newNote }));
  }

  setNewNote(oldNote: Note, { html, text }: ContentChange): Note {
    return {
      ...oldNote,
      title: text.split("\n")[0],
      content: text.split("\n").slice(1).join(""),
      htmlText: html ?? "",
      updatedAt: dayjs().format("YYYY-MM-DD HH:mm:ss"),
    };
  }
}
