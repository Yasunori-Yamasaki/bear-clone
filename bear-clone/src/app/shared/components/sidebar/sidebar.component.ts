import { ChangeDetectionStrategy, Component } from "@angular/core";
import { LinkListComponent } from "@components/sidebar/link-list/link-list.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import {
  faCalendar,
  faNoteSticky,
  faSquareCheck,
  faTrashCan,
} from "@fortawesome/free-regular-svg-icons";
import { Category } from "@models/category.model";

@Component({
  selector: "app-sidebar",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FontAwesomeModule, LinkListComponent],
  templateUrl: "./sidebar.component.html",
})
export class SidebarComponent {
  protected wrapCategories: Category[] = [
    {
      name: "Notes",
      icon: faNoteSticky,
      isOpen: false,
      categories: [
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
      ],
    },
    { name: "Trash", icon: faTrashCan, isOpen: false },
  ];
}