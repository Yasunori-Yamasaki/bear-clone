import { ChangeDetectionStrategy, Component, output } from "@angular/core";
import { faMagnifyingGlass, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

@Component({
  selector: "app-search-box",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FontAwesomeModule],
  templateUrl: "./search-box.component.html",
})
export class SearchBoxComponent {
  toggle = output();
  search = output<string>();

  protected faMagnifyingGlass = faMagnifyingGlass;
  protected faCircleXmark = faCircleXmark;
}
