import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { Note } from "../../shared/models/note.model";
import dayjs from "dayjs";

@Component({
  selector: "app-note-item",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
  templateUrl: "./note-item.component.html",
})
export class NoteItemComponent {
  @Input() isSelected!: boolean;
  @Input() note!: Note;

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
