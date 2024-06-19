import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { NoteActions } from "../actions/note.actions";
import { tap } from "rxjs";
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
        ofType(NoteActions.addNotes),
        tap(({ newNotes }) => {
          this.localStorageService.save(newNotes);
        })
      ),
    { dispatch: false }
  );
}
