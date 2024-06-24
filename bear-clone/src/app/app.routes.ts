import { Routes } from "@angular/router";
import { TrashListComponent } from "./trash/pages/trash-list/trash-list.component";
import { DefaultListComponent } from "../app/default/pages/default-list/default-list.component";
import { TodoListComponent } from "./todo/pages/todo-list/todo-list.component";
import { SelectedComponent as DefaultSelectedComponent } from "../app/default/pages/default-list/selected/selected.component";
import { TodayListComponent } from "./today/pages/today-list/today-list.component";
import { SelectedComponent as TrashSelectedComponent } from "./trash/pages/trash-list/selected/selected.component";
import { SelectedComponent as TodoSelectedComponent } from "./todo/pages/todo-list/selected/selected.component";
import { SelectedComponent as TodaySelectedComponent } from "./today/pages/today-list/selected/selected.component";

export const routes: Routes = [
  { path: "", redirectTo: "notes", pathMatch: "full" },
  { path: "notes", component: DefaultListComponent },
  { path: "notes/:id", component: DefaultSelectedComponent },
  { path: "todo", component: TodoListComponent },
  { path: "todo/:id", component: TodoSelectedComponent },
  { path: "today", component: TodayListComponent },
  { path: "today/:id", component: TodaySelectedComponent },
  { path: "trash", component: TrashListComponent },
  { path: "trash/:id", component: TrashSelectedComponent },
];
