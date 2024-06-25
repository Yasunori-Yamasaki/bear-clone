import { Category } from "@models/category.model";
import { createActionGroup, props } from "@ngrx/store";

export const CategoryActions = createActionGroup({
  source: "Category",
  events: {
    "Change Category": props<{ category: Category["name"] }>(),
  },
});
