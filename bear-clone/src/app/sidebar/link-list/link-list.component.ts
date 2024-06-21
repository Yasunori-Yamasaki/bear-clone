import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { faAngleDown, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { AsyncPipe, NgClass, NgStyle } from "@angular/common";
import { Category } from "../../shared/models/category.model";
import { RouterLink } from "@angular/router";
import { CategoryService } from "../../shared/services/category.service";
import { Store } from "@ngrx/store";
import { NoteActions } from "../../shared/actions/note.actions";

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
