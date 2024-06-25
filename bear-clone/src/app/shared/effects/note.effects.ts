import { NoteActions } from "@actions/note.actions";
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
          map((newNote) =>
            NoteActions.addNotesSuccess({
              newNote,
            })
          )
        );
      })
    )
  );

  removeLocalStorage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(NoteActions.removeNotes),
      switchMap(({ noteId, selectedNoteId }) => {
        return of(this.noteApiService.delete(noteId)).pipe(
          map((newNotes) =>
            NoteActions.removeNotesSuccess({
              newNotes,
              deleteNoteId: noteId,
              selectedNoteId,
            })
          )
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

  addSuccessfulNavigate$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(NoteActions.addNotesSuccess),
        tap(({ newNote }) => {
          this.router.navigate(["/notes", newNote.id]);
        })
      ),
    { dispatch: false }
  );

  removeSuccessfulNNavigate$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(NoteActions.removeNotesSuccess),
        tap(({ deleteNoteId, selectedNoteId }) => {
          if (selectedNoteId === deleteNoteId) {
            this.router.navigate(["/notes"]);
          }
        })
      ),
    { dispatch: false }
  );
}
