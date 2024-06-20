import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Note } from "../models/note.model";

@Injectable({
  providedIn: "root",
})
export class NoteService {
  public selectedNote = new BehaviorSubject<Note | null>(null);

  /**
   * メモ選択状態に変更
   * @param note 選択状態にしたいメモデータ
   */
  changeNote(note: Note): void {
    this.selectedNote.next(note);
  }

  /**
   * メモ未選択の状態に変更
   */
  resetNote(): void {
    this.selectedNote.next(null);
  }
}
