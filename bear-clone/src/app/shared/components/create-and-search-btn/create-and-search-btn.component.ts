import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, output } from "@angular/core";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { AsyncPipe } from "@angular/common";
import { CategoryService } from "@services/category.service";

@Component({
  selector: "app-create-and-search-btn",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FontAwesomeModule],
  templateUrl: "./create-and-search-btn.component.html",
  host: {
    class: "ticky top-0 flex h-12 items-center justify-between bg-white p-1",
  },
})
export class CreateAndSearchBtnComponent implements OnInit {
  toggle = output<void>();
  create = output<void>();

  protected selectedCategory!: string;

  protected faMagnifyingGlass = faMagnifyingGlass;
  protected faPenToSquare = faPenToSquare;

  constructor(protected categoryService: CategoryService) {}

  ngOnInit(): void {
    this.categoryService.selectedCategory.subscribe((category) => {
      this.selectedCategory = category;
    });
  }

  createNote(): void {
    if (this.selectedCategory === "Trash") return;

    this.create.emit();
  }
}
