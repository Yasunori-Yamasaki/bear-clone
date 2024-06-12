import { Component, EventEmitter, Input, Output } from "@angular/core";
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
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: "./link-list.component.html",
})
export class LinkListComponent {
  @Input() selectedCategory!: string;
  @Input() wrapCategory!: Category;
  @Output() select = new EventEmitter<string>();

  faAngleDown = faAngleDown;
  faAngleRight = faAngleRight;
  faCalendar = faCalendar;
  faFolder = faFolder;
  faLock = faLock;
  faNoteSticky = faNoteSticky;
  faSquareCheck = faSquareCheck;

  isOpen = false;

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
   * @param categoryName 選択したカテゴリー名
   */
  selectCategory(categoryName: string): void {
    this.select.emit(categoryName);
  }

  /**
   * トグルボタンを押しても選択状態にならないようにするための処理
   */
  disableToggle(event: Event): void {
    event.stopPropagation();
  }
}
