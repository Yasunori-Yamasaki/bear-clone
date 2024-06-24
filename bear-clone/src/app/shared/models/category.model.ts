import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export type Category = {
  name: string;
  icon: IconDefinition;
  isOpen: boolean;
  categories?: Category[];
};
