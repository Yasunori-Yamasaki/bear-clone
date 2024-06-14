import { createReducer, on } from "@ngrx/store";
import { initialState } from "../models/note.model";

export const noteFeatureKey = "note";

export const noteReducer = createReducer(initialState);
