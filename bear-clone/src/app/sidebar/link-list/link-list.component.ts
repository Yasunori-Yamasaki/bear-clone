import { Component } from "@angular/core";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import {
  IconDefinition,
  faCalendar,
  faFolder,
  faNoteSticky,
  faSquareCheck,
} from "@fortawesome/free-regular-svg-icons";
import { faAngleDown, faAngleRight, faLock } from "@fortawesome/free-solid-svg-icons";

type Category = {
  name: string;
  icon: IconDefinition;
  categories?: Category[];
};

@Component({
  selector: "app-link-list",
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: "./link-list.component.html",
})
export class LinkListComponent {
  faAngleDown = faAngleDown;
  faAngleRight = faAngleRight;
  faCalendar = faCalendar;
  faFolder = faFolder;
  faLock = faLock;
  faNoteSticky = faNoteSticky;
  faSquareCheck = faSquareCheck;

  isOpen = false;

  // ToDo: 親コンポーネントからのデータ受け取りに変更する。
  wrapCategory: Category = {
    name: "Notes",
    icon: faNoteSticky,
    categories: [
      {
        name: "Untagged",
        icon: faFolder,
      },
      {
        name: "Todo",
        icon: faSquareCheck,
      },
      {
        name: "Today",
        icon: faCalendar,
      },
      {
        name: "Locked",
        icon: faLock,
      },
    ],
  };

  /**
   * 下層カテゴリの表示フラグ切り替え処理
   * @param bool トグル開閉の真偽値
   */
  toggleOpen(bool: boolean): void {
    this.isOpen = bool;
  }
}
