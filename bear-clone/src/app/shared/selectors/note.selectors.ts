import { createFeatureSelector, createSelector } from "@ngrx/store";
import { noteFeatureKey } from "../reducers/note.reducer";
import { Note } from "../models/note.model";

export const selectNotesState = createFeatureSelector<Note[]>(noteFeatureKey);

export const selectAllNotes = createSelector(selectNotesState, (state) => state);

/**
 * 削除されていない(Trashに入っていない)メモの一覧データを取得
 */
export const selectAllPublicNotes = createSelector(selectNotesState, (state) => {
  return state.filter((note) => !note.isDeleted);
});

/**
 * 削除された(Trashに入っている)メモの一覧データを取得
 */
export const selectAllDeletedNotes = createSelector(selectNotesState, (state) => {
  return state.filter((note) => note.isDeleted);
});
