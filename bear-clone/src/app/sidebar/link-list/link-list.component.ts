import { ChangeDetectionStrategy, Component, Input, output } from "@angular/core";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import {
  faCalendar,
  faFolder,
  faNoteSticky,
  faSquareCheck,
} from "@fortawesome/free-regular-svg-icons";
import { faAngleDown, faAngleRight, faLock } from "@fortawesome/free-solid-svg-icons";
import { Category } from "../sidebar.component";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-link-list",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: "./link-list.component.html",
})
export class LinkListComponent {
  @Input() selectedCategory!: string;
  @Input() wrapCategory!: Category;
  @Input() level!: number;
  select = output<string>();

  faAngleDown = faAngleDown;
  faAngleRight = faAngleRight;
  faCalendar = faCalendar;
  faFolder = faFolder;
  faLock = faLock;
  faNoteSticky = faNoteSticky;
  faSquareCheck = faSquareCheck;

  isOpen = false;

  /**
   * 階層構造のグループ表示用スタイリングのプロパティ値計算処理
   * @param level 階層(入れ子)段階
   * @returns padding-leftの適用値
   */
  calcPaddingLeft(level: number): string {
    const basePadding = 2;

    return `${basePadding + level}rem`;
  }

  /**
   * 下層カテゴリの表示フラグ切り替え処理
   * @param category 選択したカテゴリオブジェクト
   * @param bool トグル開閉の真偽値
   */
  toggleOpenCategory(category: Category, bool: boolean, event: Event): void {
    category.isOpen = bool;

    // トグルボタンを押した場合は、カテゴリ選択処理(selectCategory)を発火させない。
    event.stopPropagation();
  }

  /**
   * カテゴリーの選択処理
   * @param categoryName 選択したカテゴリー名
   */
  selectCategory(categoryName: string): void {
    this.select.emit(categoryName);
  }
}
