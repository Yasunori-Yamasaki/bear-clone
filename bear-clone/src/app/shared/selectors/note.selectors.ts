import { createFeatureSelector, createSelector } from "@ngrx/store";
import { noteFeatureKey } from "../reducers/note.reducer";
import { Note } from "../models/note.model";
import dayjs from "dayjs";

export const selectNotesState = createFeatureSelector<Note[]>(noteFeatureKey);

/**
 * 削除されていない(Trashに入っていない)メモの一覧データを取得
 */
export const selectAllPublicNotes = createSelector(selectNotesState, (state) => {
  return state.filter((note) => !note.isDeleted);
});

/**
 * チェックリストが本文に入っているメモの一覧データを取得
 */
export const selectAllTodoNotes = createSelector(selectNotesState, (state) => {
  return state.filter((note) => note.htmlText.includes("data-list"));
});

/**
 * 更新日時が24時間以内のメモ一覧データを取得
 */
export const selectAllTodayNotes = createSelector(selectNotesState, (state) => {
  return state.filter((note) => {
    const baseDate = dayjs(note.updatedAt);
    const oneDayAgo = dayjs().subtract(1, "day");

    return baseDate.isBefore(oneDayAgo)
  });
});

/**
 * 削除された(Trashに入っている)メモの一覧データを取得
 */
export const selectAllDeletedNotes = createSelector(selectNotesState, (state) => {
  return state.filter((note) => note.isDeleted);
});
