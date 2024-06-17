import { Component } from "@angular/core";
import { QuillModule, QuillModules } from "ngx-quill";

@Component({
  selector: "app-editor",
  standalone: true,
  imports: [QuillModule],
  templateUrl: "./editor.component.html",
})
export class EditorComponent {
  protected modules: QuillModules = {
    toolbar: {
      container: [
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        [{ list: "ordered" }, { list: "bullet" }],
        ["bold", "italic", "underline", "strike"],
        ["link", "image"],
        ["blockquote", "code-block"],
      ],
    },
  };
  protected placeholder = "";
}
