import { NoteActions } from "@actions/note.actions";
import { AsyncPipe, NgClass, NgStyle } from "@angular/common";
import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { RouterLink } from "@angular/router";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { faAngleDown, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Category } from "@models/category.model";
import { Store } from "@ngrx/store";
import { CategoryService } from "@services/category.service";

@Component({
  selector: "app-link-list",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AsyncPipe, FontAwesomeModule, RouterLink, NgClass, NgStyle],
  templateUrl: "./link-list.component.html",
})
export class LinkListComponent {
  @Input({ required: true }) wrapCategory!: Category;
  @Input({ required: true }) level!: number;

  faAngleDown = faAngleDown;
  faAngleRight = faAngleRight;

  isOpen = false;

  constructor(
    protected categoryService: CategoryService,
    private store: Store
  ) {}

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
  changeCategory(name: string): void {
    this.categoryService.changeCategory(name);
    this.store.dispatch(NoteActions.resetSelectedNote());
  }
}
