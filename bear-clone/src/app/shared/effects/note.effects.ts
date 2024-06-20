import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { NoteActions } from "../actions/note.actions";
import { map, of, switchMap, tap } from "rxjs";
import { NoteApiService } from "../services/note-api.service";

@Injectable()
export class NoteEffects {
  constructor(
    private actions$: Actions,
    private noteApiService: NoteApiService
  ) {}

  getLocalStorage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(NoteActions.getInitialNotes),
      switchMap(() => {
        return of(this.noteApiService.getAll()).pipe(
          map((allNotes) => NoteActions.getInitialNotesSuccess({ allNotes }))
        );
      })
    )
  );

  addLocalStorage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(NoteActions.addNotes),
      switchMap(() => {
        return of(this.noteApiService.create()).pipe(
          map((newNotes) => NoteActions.addNotesSuccess({ newNotes }))
        );
      })
    )
  );

  removeLocalStorage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(NoteActions.removeNotes),
      switchMap(({ noteId }) => {
        return of(this.noteApiService.delete(noteId)).pipe(
          map((newNotes) => NoteActions.removeNotesSuccess({ newNotes }))
        );
      })
    )
  );

  updateLocalStorage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(NoteActions.updateNotes),
      switchMap(({ noteId, html, text }) => {
        return of(this.noteApiService.update(noteId, html, text)).pipe(
          map((newNotes) => NoteActions.updateNotesSuccess({ newNotes }))
        );
      })
    )
  );
}
