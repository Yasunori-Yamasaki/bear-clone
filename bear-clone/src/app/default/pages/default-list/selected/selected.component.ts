import { NotePageActions } from "@actions/note.actions";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { EditorComponent } from "@components/editor/editor.component";
import { NoteListComponent } from "@components/note-list/note-list.component";
import { Store } from "@ngrx/store";
import { selectAllPublicNotes, selectSelectedNote } from "@selectors/note.selectors";

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

      this.store.dispatch(NotePageActions.setSelectedNote({ noteId, notes: this.publicNotes() }));
    });
  }

  ngOnDestroy(): void {
    this.store.dispatch(NotePageActions.resetSelectedNote());
  }
}
