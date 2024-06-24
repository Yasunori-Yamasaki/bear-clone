import { Routes } from "@angular/router";
import { TrashListComponent } from "./trash/pages/trash-list/trash-list.component";
import { DefaultListComponent } from "../app/default/pages/default-list/default-list.component";
import { TodoListComponent } from "./todo/pages/todo-list/todo-list.component";
import { SelectedComponent as DefaultSelectedComponent } from "../app/default/pages/default-list/selected/selected.component";
import { TodayListComponent } from "./today/pages/today-list/today-list.component";

export const routes: Routes = [
  { path: "", redirectTo: "notes", pathMatch: "full" },
  { path: "notes", component: DefaultListComponent },
  { path: "notes/:id", component: DefaultSelectedComponent },
  { path: "todo", component: TodoListComponent },
  { path: "today", component: TodayListComponent },
  { path: "trash", component: TrashListComponent },
];
