import { CategoryActions } from "@actions/category.actions";
import { NotePageActions } from "@actions/note.actions";
import { AsyncPipe, NgClass, NgStyle } from "@angular/common";
import { ChangeDetectionStrategy, Component, input } from "@angular/core";
import { RouterLink } from "@angular/router";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { faAngleDown, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Category } from "@models/category.model";
import { Store } from "@ngrx/store";
import { selectSelectedCategory } from "@selectors/category.selectors";

@Component({
  selector: "app-link-list",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AsyncPipe, FontAwesomeModule, RouterLink, NgClass, NgStyle],
  templateUrl: "./link-list.component.html",
})
export class LinkListComponent {
  public wrapCategory = input.required<Category>();
  public level = input.required<number>();

  protected selectedCategory = this.store.selectSignal(selectSelectedCategory);
  protected faAngleDown = faAngleDown;
  protected faAngleRight = faAngleRight;

  constructor(private store: Store) {}

  /**
   * 階層構造のグループ表示用スタイリングのプロパティ値計算処理
   * @param level 階層(入れ子)段階
   * @returns padding-leftの適用値
   */
  calcPaddingLeft(level: number): string {
    const basePadding = 2;

    return `${basePadding + level}rem`;
  }

  /**
   * カテゴリーの選択処理
   * - メモは未選択状態へ変更
   * @param name 選択したカテゴリー名
   */
  changeCategory(category: Category["name"]): void {
    this.store.dispatch(CategoryActions.changeCategory({ category }));
    this.store.dispatch(NotePageActions.resetSelectedNote());
  }
}
