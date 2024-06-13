import { ChangeDetectionStrategy, Component } from "@angular/core";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { CommonModule } from "@angular/common";

type Note = {
  title: string;
  content: string;
  updatedAt: string;
};

@Component({
  selector: "app-note-list",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: "./note-list.component.html",
})
export class NoteListComponent {
  protected faMagnifyingGlass = faMagnifyingGlass;
  protected faPenToSquare = faPenToSquare;

  selectedNote: Note | null = null;

  notes: Note[] = [
    {
      title: "テストタイトル",
      content: "テスト本文 これはテストですが、テストじゃない......",
      updatedAt: "Just now",
    },
    {
      title: "テストタイトル2",
      content: "テスト本文2 これは本番かと思いきや、テストだ......",
      updatedAt: "Jun 10",
    },
  ];

  selectNote(note: Note): void {
    this.selectedNote = note;
  }
}
