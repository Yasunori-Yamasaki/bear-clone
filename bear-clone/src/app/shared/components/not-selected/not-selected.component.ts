import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "app-not-selected",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  templateUrl: "./not-selected.component.html",
})
export class NotSelectedComponent {}
