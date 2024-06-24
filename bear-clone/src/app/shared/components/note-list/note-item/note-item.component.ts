import { NoteActions } from "@actions/note.actions";
import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { Note } from "@models/note.model";
import { Store } from "@ngrx/store";
import { FormatDatePipe } from "@pipes/format-date.pipe";

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