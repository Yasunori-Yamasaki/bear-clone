import { ChangeDetectionStrategy, Component, output } from "@angular/core";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Store } from "@ngrx/store";
import { selectSelectedCategory } from "@selectors/category.selectors";

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
export class CreateAndSearchBtnComponent {
  public toggle = output<void>();
  public create = output<void>();

  protected selectedCategory = this.store.selectSignal(selectSelectedCategory);
  protected faMagnifyingGlass = faMagnifyingGlass;
  protected faPenToSquare = faPenToSquare;

  constructor(private store: Store) {}

  protected createNote(): void {
    if (this.selectedCategory() === "Trash") return;

    this.create.emit();
  }
}
