import { ChangeDetectionStrategy, Component, signal } from "@angular/core";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import {
  IconDefinition,
  faCalendar,
  faFolder,
  faNoteSticky,
  faSquareCheck,
  faTrashCan,
} from "@fortawesome/free-regular-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
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
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FontAwesomeModule, LinkListComponent],
  templateUrl: "./sidebar.component.html",
})
export class SidebarComponent {
  selectedCategory = signal("Notes");

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
  ];
}
