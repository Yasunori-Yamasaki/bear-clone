import { NoteLocalStorageActions } from "@actions/note.actions";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { NoteApiService } from "@services/note-api.service";
import { map, of, switchMap, tap } from "rxjs";

@Injectable()
export class NoteEffects {
  constructor(
    private actions$: Actions,
    private noteApiService: NoteApiService,
    private router: Router
  ) {}

  getLocalStorage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(NoteLocalStorageActions.getInitialNotes),
      switchMap(() => {
        return of(this.noteApiService.getAll()).pipe(
          map((allNotes) => NoteLocalStorageActions.getInitialNotesSuccess({ allNotes }))
        );
      })
    )
  );

  addLocalStorage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(NoteLocalStorageActions.addNotes),
      switchMap(() => {
        return of(this.noteApiService.create()).pipe(
          map((newNote) =>
            NoteLocalStorageActions.addNotesSuccess({
              newNote,
            })
          )
        );
      })
    )
  );

  removeLocalStorage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(NoteLocalStorageActions.removeNotes),
      switchMap(({ noteId, selectedNoteId }) => {
        return of(this.noteApiService.delete(noteId)).pipe(
          map((deletedNote) => {
            const newNotes = this.noteApiService.getAll();
            return NoteLocalStorageActions.removeNotesSuccess({
              newNotes,
              deletedNote,
              selectedNoteId,
            });
          })
        );
      })
    )
  );

  updateLocalStorage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(NoteLocalStorageActions.updateNotes),
      switchMap(({ noteId, html, text }) => {
        return of(this.noteApiService.update(noteId, html, text)).pipe(
          map(() => {
            const newNotes = this.noteApiService.getAll();
            return NoteLocalStorageActions.updateNotesSuccess({ newNotes });
          })
        );
      })
    )
  );

  addSuccessfulNavigate$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(NoteLocalStorageActions.addNotesSuccess),
        tap(({ newNote }) => {
          this.router.navigate(["/notes", newNote.id]);
        })
      ),
    { dispatch: false }
  );

  removeSuccessfulNNavigate$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(NoteLocalStorageActions.removeNotesSuccess),
        tap(({ deletedNote, selectedNoteId }) => {
          if (deletedNote.id === selectedNoteId) {
            this.router.navigate(["/notes"]);
          }
        })
      ),
    { dispatch: false }
  );
}
