import { Injectable } from "@angular/core";
import { Note } from "../models/note.model";
import { ContentChange } from "ngx-quill";
import dayjs from "dayjs";
import { LocalStorageService } from "./local-storage.service";

@Injectable({
  providedIn: "root",
})
export class NoteApiService {
  constructor(private localStorageService: LocalStorageService) {}

  /**
   * 新規メモの作成処理
   */
  create(): Note[] {
    const newNotes = this.setNewCreateNotes(this.localStorageService.get());
    this.localStorageService.save(newNotes);

    return newNotes;
  }

  /**
   * 該当メモの削除処理
   * - 論理削除
   * @param noteId 削除対象メモID
   */
  delete(noteId: string): Note[] {
    const newNotes = this.localStorageService.get().map((note) => {
      if (note.id !== noteId) return note;

      return {
        ...note,
        isDeleted: true,
      };
    });

    this.localStorageService.save(newNotes);
    return newNotes;
  }

  /**
   * 該当メモの内容更新処理
   * @param noteId 更新対象メモID
   * @param html リッチテキストコンテンツ
   * @param text リッチテキスト内のテキストのみコンテンツ
   */
  update(noteId: Note["id"], html: ContentChange["html"], text: ContentChange["text"]): Note[] {
    const allNotes = this.localStorageService.get();
    const newNotes = allNotes.map((note) => {
      if (note.id !== noteId) return note;

      return {
        ...note,
        title: text.split("\n")[0],
        content: text.split("\n").slice(1).join(""),
        htmlText: html ?? "",
        updatedAt: dayjs().format("YYYY-MM-DD HH:mm:ss"),
      };
    });

    this.localStorageService.save(newNotes);
    return newNotes;
  }

  setNewCreateNotes(notes: Note[]): Note[] {
    const latestId = !notes.length ? 1 : parseInt(notes[notes.length - 1].id) + 1;
    const now = dayjs();
    const newNote: Note = {
      id: latestId.toString(),
      title: "",
      content: "",
      htmlText: "",
      tags: [],
      updatedAt: now.format("YYYY-MM-DD HH:mm:ss"),
      isDeleted: false,
    };

    return [...notes, newNote];
  }
}
