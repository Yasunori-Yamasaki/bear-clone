import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { Note } from "../../shared/models/note.model";
import dayjs from "dayjs";
import { FormatDatePipe } from "../../shared/pipes/format-date.pipe";

@Component({
  selector: "app-note-item",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, FormatDatePipe],
  templateUrl: "./note-item.component.html",
})
export class NoteItemComponent {
  @Input({ required: true }) isSelected!: boolean;
  @Input({ required: true }) note!: Note;
}
