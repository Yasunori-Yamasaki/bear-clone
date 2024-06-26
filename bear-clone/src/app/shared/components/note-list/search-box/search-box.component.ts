import { ChangeDetectionStrategy, Component, input, output } from "@angular/core";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { faCircleXmark, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-search-box",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FontAwesomeModule],
  templateUrl: "./search-box.component.html",
  host: {
    class: "sticky top-0 flex h-12 items-center justify-between bg-white py-1 px-2",
  },
})
export class SearchBoxComponent {
  public toggle = output();
  public search = output<string>();
  public inputVal = input.required<string>();

  protected faMagnifyingGlass = faMagnifyingGlass;
  protected faCircleXmark = faCircleXmark;
}
