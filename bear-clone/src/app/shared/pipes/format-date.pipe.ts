import { Pipe, PipeTransform } from "@angular/core";
import dayjs from "dayjs";

/**
 * 与えられた日時を現在との時間差によって下記にフォーマットする。
 * - 秒数まで一緒： Just now
 * - 1分以内：~~ seconds ago
 * - 1時間以内：~~ minutes ago
 * - 1日以内：~~ hours ago
 * - 1日以上：ex.) Jun 13
 * @param value メモの更新日時
 * @returns フォーマット後の更新日時
 */
@Pipe({
  name: "formatDate",
  standalone: true,
})
export class FormatDatePipe implements PipeTransform {
  transform(value: string): string {
    const baseDate = dayjs(value);
    const now = dayjs();
    const oneMinuteAgo = now.subtract(1, "minute");
    const oneHourAgo = now.subtract(1, "hour");
    const oneDayAgo = now.subtract(1, "day");

    if (baseDate.isSame(now, "second")) return "Just now";

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
