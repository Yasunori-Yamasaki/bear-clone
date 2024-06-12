import { Component } from "@angular/core";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import {
  faCalendar,
  faFolder,
  faNoteSticky,
  faSquareCheck,
  faTrashCan,
} from "@fortawesome/free-regular-svg-icons";
import { faAngleDown, faAngleRight, faHashtag, faLock } from "@fortawesome/free-solid-svg-icons";
import { faAngular } from "@fortawesome/free-brands-svg-icons";
import { LinkListComponent } from "./link-list/link-list.component";

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
}
