import { Component } from "@angular/core";
import { QuillModule, QuillModules } from "ngx-quill";

@Component({
  selector: "app-editor",
  standalone: true,
  imports: [QuillModule],
  templateUrl: "./editor.component.html",
  host: {
    class: "relative",
  },
})
export class EditorComponent {
  protected modules: QuillModules = {
    toolbar: "#toolbar",
  };
  protected placeholder = "";
}
