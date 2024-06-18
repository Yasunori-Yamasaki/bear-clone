import { Injectable } from "@angular/core";
import { Note } from "../models/note.model";

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

    return JSON.parse(data) as Note[];
  }
}
