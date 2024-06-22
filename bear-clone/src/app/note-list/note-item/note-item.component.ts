import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { Note } from "../../shared/models/note.model";
import { FormatDatePipe } from "../../shared/pipes/format-date.pipe";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { Store } from "@ngrx/store";
import { NoteActions } from "../../shared/actions/note.actions";

@Component({
  selector: "app-note-item",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, FormatDatePipe, FontAwesomeModule],
  templateUrl: "./note-item.component.html",
})
export class NoteItemComponent {
  @Input({ required: true }) isSelected!: boolean;
  @Input({ required: true }) note!: Note;
  @Input({ required: true }) selectedNoteId!: Note["id"];

  faTrashCan = faTrashCan;

  constructor(private store: Store) {}

  /**
   * Storeから該当メモを削除
   * @param noteId 削除対象メモID
   */
  remove(noteId: string): void {
    this.store.dispatch(NoteActions.removeNotes({ noteId, selectedNoteId: this.selectedNoteId }));
  }
}
