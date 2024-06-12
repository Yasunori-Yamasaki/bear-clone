import { Component } from "@angular/core";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import {
  faCalendar,
  faFolder,
  faNoteSticky,
  faSquareCheck,
} from "@fortawesome/free-regular-svg-icons";
import { faAngleDown, faAngleRight, faLock } from "@fortawesome/free-solid-svg-icons";

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

  /**
   * 下層カテゴリの表示フラグ切り替え処理
   * @param bool トグル開閉の真偽値
   */
  toggleOpen(bool: boolean): void {
    this.isOpen = bool;
  }
}
