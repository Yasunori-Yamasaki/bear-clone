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

  // ToDo: データ格納場所を変更 & タグカテゴリー分はデータ取得するように修正。

  wrapCategories: Category[] = [
    {
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
    },
    { name: "Trash", icon: faTrashCan },
    { name: "bear", icon: faAngular },
    { name: "tag", icon: faHashtag },
  ];
}
