import { Injectable } from "@angular/core";
import { Note } from "@models/note.model";

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

  isNotes(data: any): data is Note[] {
    return Array.isArray(data) && data.every(this.isNote);
  }

  /**
   * メモデータの定義はmodelファイル内に記述
   * @see {@link Note}
   */
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
