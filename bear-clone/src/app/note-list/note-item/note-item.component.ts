import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, Input, output } from "@angular/core";
import { Note } from "../../shared/models/note.model";
import { FormatDatePipe } from "../../shared/pipes/format-date.pipe";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

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
  trash = output<string>();

  faTrashCan = faTrashCan;
}
