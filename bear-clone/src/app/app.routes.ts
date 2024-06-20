import { Routes } from "@angular/router";
import { TrashListComponent } from "./trash-list/trash-list.component";
import { DefaultListComponent } from "./default-list/default-list.component";

export const routes: Routes = [
  { path: "", redirectTo: "notes", pathMatch: "full" },
  { path: "notes", component: DefaultListComponent },
  { path: "trash", component: TrashListComponent },
];
