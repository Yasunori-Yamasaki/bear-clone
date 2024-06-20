import { Routes } from "@angular/router";
import { TrashListComponent } from "./trash-list/trash-list.component";
import { DefaultListComponent } from "./default-list/default-list.component";
import { TodayListComponent } from "./today-list/today-list.component";
import { TodoListComponent } from "./todo-list/todo-list.component";

export const routes: Routes = [
  { path: "", redirectTo: "notes", pathMatch: "full" },
  { path: "notes", component: DefaultListComponent },
  { path: "todo", component: TodoListComponent },
  { path: "today", component: TodayListComponent },
  { path: "trash", component: TrashListComponent },
];
