import { createFeatureSelector, createSelector } from "@ngrx/store";
import { noteFeatureKey } from "@reducers/note.reducer";
import { Note, State } from "@models/note.model";
import dayjs from "dayjs";

export const selectNotesState = createFeatureSelector<State>(noteFeatureKey);

/**
 * 削除されていない(Trashに入っていない)メモの一覧データを取得
 */
export const selectAllPublicNotes = createSelector(selectNotesState, ({ notes }) => {
  return notes.filter((note) => !note.isDeleted);
});

/**
 * チェックリストが本文に入っているメモの一覧データを取得
 */
export const selectAllTodoNotes = createSelector(selectNotesState, ({ notes }) => {
  return notes.filter((note) => {
    return !note.isDeleted && note.htmlText.includes("data-list");
  });
});

/**
 * 更新日時が24時間以内のメモ一覧データを取得
 */
export const selectAllTodayNotes = createSelector(selectNotesState, ({ notes }) => {
  return notes.filter((note) => {
    if (note.isDeleted) return false;

    const baseDate = dayjs(note.updatedAt);
    const oneDayAgo = dayjs().subtract(1, "day");

    return baseDate.isAfter(oneDayAgo);
  });
});

/**
 * 削除された(Trashに入っている)メモの一覧データを取得
 */
export const selectAllDeletedNotes = createSelector(selectNotesState, ({ notes }) => {
  return notes.filter((note) => note.isDeleted);
});

export const selectSelectedNote = createSelector(
  selectNotesState,
  ({ selectedNote }) => selectedNote
);
