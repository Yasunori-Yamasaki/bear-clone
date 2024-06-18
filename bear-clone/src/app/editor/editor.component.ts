import { Component, Input, output } from "@angular/core";
import { ContentChange, QuillModule, QuillModules } from "ngx-quill";
import { Note } from "../shared/models/note.model";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-editor",
  standalone: true,
  imports: [QuillModule, FormsModule],
  templateUrl: "./editor.component.html",
  host: {
    class: "relative",
  },
})
export class EditorComponent {
  @Input({ required: true }) note!: Note | null;
  protected contentChange = output<ContentChange>();

  protected modules: QuillModules = {
    toolbar: "#toolbar",
  };
  protected htmlText = this.note?.htmlText;
}
