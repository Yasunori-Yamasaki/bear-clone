import { Routes } from "@angular/router";
import { TrashListComponent } from "./trash-list/trash-list.component";
import { DefaultListComponent } from "./default-list/default-list.component";
import { TodayListComponent } from "./today-list/today-list.component";
import { TodoListComponent } from "./todo-list/todo-list.component";
import { SelectedComponent as DefaultSelectedComponent } from "./default-list/selected/selected.component";

export const routes: Routes = [
  { path: "", redirectTo: "notes", pathMatch: "full" },
  { path: "notes", component: DefaultListComponent },
  { path: "notes/:id", component: DefaultSelectedComponent },
  { path: "todo", component: TodoListComponent },
  { path: "today", component: TodayListComponent },
  { path: "trash", component: TrashListComponent },
];
