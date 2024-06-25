import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "app-not-selected",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  templateUrl: "./not-selected.component.html",
  host: {
    class: "flex items-center justify-center text-3xl text-[#888889]",
  },
})
export class NotSelectedComponent {}
