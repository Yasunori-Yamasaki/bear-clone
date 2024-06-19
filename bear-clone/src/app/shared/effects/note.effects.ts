import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { NoteActions } from "../actions/note.actions";
import { map, of, switchMap, tap } from "rxjs";
import { LocalStorageService } from "../services/local-storage.service";

@Injectable()
export class NoteEffects {
  constructor(
    private actions$: Actions,
    private localStorageService: LocalStorageService
  ) {}

  localStorage$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(NoteActions.updateNotes),
        tap(({ newNotes }) => {
          this.localStorageService.save(newNotes);
        })
      ),
    { dispatch: false }
  );

  addLocalStorage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(NoteActions.addNotes),
      switchMap(() => {
        return of(this.localStorageService.createNote()).pipe(
          map((newNotes) => NoteActions.addNotesSuccess({ newNotes }))
        );
      })
    )
  );

  removeLocalStorage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(NoteActions.removeNotes),
      switchMap(({ noteId }) => {
        return of(this.localStorageService.deleteNote(noteId)).pipe(
          map((newNotes) => NoteActions.removeNotesSuccess({ newNotes }))
        );
      })
    )
  );
}
