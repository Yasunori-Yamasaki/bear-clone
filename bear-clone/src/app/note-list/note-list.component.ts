import { ChangeDetectionStrategy, Component } from "@angular/core";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { CommonModule } from "@angular/common";
import dayjs from "dayjs";

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
      updatedAt: "2024-06-13 10:42:00",
    },
    {
      title: "テストタイトル2",
      content: "テスト本文2 これは本番かと思いきや、テストだ......",
      updatedAt: "2024-06-10 00:00:00",
    },
  ];

  selectNote(note: Note): void {
    this.selectedNote = note;
  }

  /**
   * メモの更新日時を現在との時間差によって下記にフォーマットする。
   * - 1分以内：~~ seconds ago
   * - 1時間以内：~~ minutes ago
   * - 1日以内：~~ hours ago
   * - 1日以上：ex.) Jun 13
   * @param baseDateStr メモの更新日時
   * @returns フォーマット後の更新日時
   */
  formatUpdateAt(baseDateStr: string): string {
    const baseDate = dayjs(baseDateStr);
    const now = dayjs();
    const oneMinuteAgo = now.subtract(1, "minute");
    const oneHourAgo = now.subtract(1, "hour");
    const oneDayAgo = now.subtract(1, "day");

    if (baseDate.isAfter(oneMinuteAgo) && baseDate.isBefore(now)) {
      const diffSec = now.diff(baseDate, "second");
      return `${diffSec} seconds ago`;
    }

    if (baseDate.isAfter(oneHourAgo) && baseDate.isBefore(oneMinuteAgo)) {
      const diffMinutes = now.diff(baseDate, "minute");
      return `${diffMinutes} minutes ago`;
    }

    if (baseDate.isAfter(oneDayAgo) && baseDate.isBefore(oneHourAgo)) {
      const diffHours = now.diff(baseDate, "hour");
      return `${diffHours} hours ago`;
    }

    return baseDate.format("MMM D");
  }
}
