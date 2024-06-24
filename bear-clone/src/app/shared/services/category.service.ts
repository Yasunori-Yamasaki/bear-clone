import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CategoryService {
  public selectedCategory = new BehaviorSubject("Notes");

  changeCategory(name: string): void {
    this.selectedCategory.next(name);
  }
}
