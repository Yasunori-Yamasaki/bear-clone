import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export type Category = {
  name: "Notes" | "Todo" | "Today" | "Trash";
  icon: IconDefinition;
  isOpen: boolean;
  categories?: Category[];
};

export type State = {
  selectedCategory: Category["name"];
};

export const initialState: State = {
  selectedCategory: "Notes",
};
