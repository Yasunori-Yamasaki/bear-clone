import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { faAngleDown, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { AsyncPipe, NgClass, NgStyle } from "@angular/common";
import { Category } from "../../shared/models/category.model";
import { RouterLink } from "@angular/router";
import { CategoryService } from "../../shared/services/category.service";

@Component({
  selector: "app-link-list",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AsyncPipe, FontAwesomeModule, RouterLink, NgClass, NgStyle],
  templateUrl: "./link-list.component.html",
})
export class LinkListComponent {
  @Input({ required: true }) wrapCategory!: Category;
  @Input({ required: true }) level!: number;

  faAngleDown = faAngleDown;
  faAngleRight = faAngleRight;

  isOpen = false;

  constructor(protected categoryService: CategoryService) {}

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
  toggleOpenCategory(category: Category, bool: boolean): void {
    category.isOpen = bool;
  }

  /**
   * カテゴリーの選択処理
   * @param name 選択したカテゴリー名
   */
  selectCategory(name: string): void {
    this.categoryService.changeCategory(name);
  }
}
