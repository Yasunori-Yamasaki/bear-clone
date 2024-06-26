import { Category } from "@models/category.model";
import { createActionGroup, props } from "@ngrx/store";

export const CategoryActions = createActionGroup({
  source: "Category",
  events: {
    // 選択カテゴリ変更処理
    "Change Category": props<{ category: Category["name"] }>(),
  },
});
