import { Component } from "@angular/core";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import {
  IconDefinition,
  faCalendar,
  faFolder,
  faNoteSticky,
  faSquareCheck,
  faTrashCan,
} from "@fortawesome/free-regular-svg-icons";
import { faAngleDown, faAngleRight, faHashtag, faLock } from "@fortawesome/free-solid-svg-icons";
import { faAngular } from "@fortawesome/free-brands-svg-icons";
import { LinkListComponent } from "./link-list/link-list.component";

export type Category = {
  name: string;
  icon: IconDefinition;
  isOpen: boolean;
  categories?: Category[];
};

@Component({
  selector: "app-sidebar",
  standalone: true,
  imports: [FontAwesomeModule, LinkListComponent],
  templateUrl: "./sidebar.component.html",
})
export class SidebarComponent {
  faAngleDown = faAngleDown;
  faAngleRight = faAngleRight;
  faAngular = faAngular;
  faCalendar = faCalendar;
  faFolder = faFolder;
  faHashtag = faHashtag;
  faLock = faLock;
  faNoteSticky = faNoteSticky;
  faSquareCheck = faSquareCheck;
  faTrashCan = faTrashCan;

  selectedCategory = "Notes";

  // ToDo: データ格納場所を変更 & タグカテゴリー分はデータ取得するように修正。

  wrapCategories: Category[] = [
    {
      name: "Notes",
      icon: faNoteSticky,
      isOpen: false,
      categories: [
        {
          name: "Untagged",
          icon: faFolder,
          isOpen: false,
          categories: [
            {
              name: "test",
              icon: faFolder,
              isOpen: false,
            },
          ],
        },
        {
          name: "Todo",
          icon: faSquareCheck,
          isOpen: false,
        },
        {
          name: "Today",
          icon: faCalendar,
          isOpen: false,
        },
        {
          name: "Locked",
          icon: faLock,
          isOpen: false,
        },
      ],
    },
    { name: "Trash", icon: faTrashCan, isOpen: false },
    { name: "bear", icon: faAngular, isOpen: false },
    { name: "tag", icon: faHashtag, isOpen: false },
  ];

  /**
   * 選択したカテゴリー名を保持する。
   * @param categoryName 選択したカテゴリー名
   */
  onSelect(categoryName: string): void {
    this.selectedCategory = categoryName;
  }
}
