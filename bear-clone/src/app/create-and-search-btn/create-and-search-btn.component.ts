import { ChangeDetectionStrategy, Component, output } from "@angular/core";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { CategoryService } from "../shared/services/category.service";
import { AsyncPipe } from "@angular/common";

@Component({
  selector: "app-create-and-search-btn",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AsyncPipe, FontAwesomeModule],
  templateUrl: "./create-and-search-btn.component.html",
  host: {
    class: "ticky top-0 flex h-12 items-center justify-between bg-white p-1",
  },
})
export class CreateAndSearchBtnComponent {
  toggle = output<void>();
  create = output<void>();

  protected faMagnifyingGlass = faMagnifyingGlass;
  protected faPenToSquare = faPenToSquare;

  constructor(protected categoryService: CategoryService) {}
}
