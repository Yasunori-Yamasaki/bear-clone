import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from "@angular/core";
import {
  selectAllDeletedNotes,
  selectSelectedNote,
} from "../../../../shared/selectors/note.selectors";
import { ActivatedRoute } from "@angular/router";
import { Store } from "@ngrx/store";
import { NoteActions } from "../../../../shared/actions/note.actions";
import { NoteListComponent } from "../../../../shared/components/note-list/note-list.component";
import { EditorComponent } from "../../../../shared/components/editor/editor.component";

@Component({
  selector: "app-selected",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NoteListComponent, EditorComponent],
  templateUrl: "./selected.component.html",
  host: {
    class: "grid grid-cols-noteList",
  },
})
export class SelectedComponent implements OnInit, OnDestroy {
  protected deletedNotes = this.store.selectSignal(selectAllDeletedNotes);
  protected selectedNote = this.store.selectSignal(selectSelectedNote);

  constructor(
    private route: ActivatedRoute,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const noteId = params["id"];

      this.store.dispatch(NoteActions.setSelectedNote({ noteId, notes: this.deletedNotes() }));
    });
  }

  ngOnDestroy(): void {
    this.store.dispatch(NoteActions.resetSelectedNote());
  }
}
