import { Component, OnDestroy, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { ActivatedRoute } from "@angular/router";
import { NoteListComponent } from "../../../../note-list/note-list.component";
import { EditorComponent } from "../../../../editor/editor.component";
import {
  selectAllPublicNotes,
  selectSelectedNote,
} from "../../../../shared/selectors/note.selectors";
import { NoteActions } from "../../../../shared/actions/note.actions";

@Component({
  selector: "app-selected",
  standalone: true,
  imports: [NoteListComponent, EditorComponent],
  templateUrl: "./selected.component.html",
  host: {
    class: "grid grid-cols-noteList",
  },
})
export class SelectedComponent implements OnInit, OnDestroy {
  protected publicNotes = this.store.selectSignal(selectAllPublicNotes);
  protected selectedNote = this.store.selectSignal(selectSelectedNote);

  constructor(
    private route: ActivatedRoute,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const noteId = params["id"];

      this.store.dispatch(NoteActions.setSelectedNote({ noteId, notes: this.publicNotes() }));
    });
  }

  ngOnDestroy(): void {
    this.store.dispatch(NoteActions.resetSelectedNote());
  }
}
