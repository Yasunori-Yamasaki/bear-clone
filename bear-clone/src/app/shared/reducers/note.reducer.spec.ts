import { noteReducer } from "./note.reducer";
import { initialState } from "@models/note.model";

describe("Note Reducer", () => {
  describe("an unknown action", () => {
    it("should return the previous state", () => {
      const action = {} as any;

      const result = noteReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
