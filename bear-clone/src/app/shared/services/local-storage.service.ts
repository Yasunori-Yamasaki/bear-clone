import { Injectable } from "@angular/core";
import { Note } from "../models/note.model";
import dayjs from "dayjs";
import { ContentChange } from "ngx-quill";

@Injectable({
  providedIn: "root",
})
export class LocalStorageService {
  private storageKey = "bear-clone-notes";

  /**
   * メモ一覧データをローカルストレージに保存
   * @param notes 保存したいメモ一覧データ
   */
  save(notes: Note[]): void {
    window.localStorage.setItem(this.storageKey, JSON.stringify(notes));
  }

  /**
   * メモ一覧データをローカルストレージから取得
   * @returns メモ一覧の配列
   */
  get(): Note[] {
    const data = window.localStorage.getItem(this.storageKey);
    if (!data) return [];

    const notes = JSON.parse(data);
    if (!this.isNotes(notes)) return [];

    return notes;
  }

  /**
   * 新規メモの作成処理
   */
  createNote(): Note[] {
    const newNotes = this.setNewCreateNotes(this.get());
    this.save(newNotes);

    return newNotes;
  }

  /**
   * 該当メモの削除処理
   * - 論理削除
   * @param noteId 削除対象メモID
   */
  deleteNote(noteId: string): Note[] {
    const newNotes = this.get().map((note) => {
      if (note.id !== noteId) return note;

      return {
        ...note,
        isDeleted: true,
      };
    });

    this.save(newNotes);
    return newNotes;
  }

  updateNote(noteId: Note["id"], html: ContentChange["html"], text: ContentChange["text"]): Note[] {
    const allNotes = this.get();
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

    this.save(newNotes);
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

  isNotes(data: any): data is Note[] {
    return Array.isArray(data) && data.every(this.isNote);
  }

  isNote(datum: any): datum is Note {
    return (
      typeof datum.id === "string" &&
      typeof datum.title === "string" &&
      typeof datum.content === "string" &&
      typeof datum.htmlText === "string" &&
      typeof datum.updatedAt === "string" &&
      typeof datum.isDeleted === "boolean" &&
      Array.isArray(datum.tags) &&
      datum.tags.every((tag: any) => typeof tag === "string")
    );
  }
}
