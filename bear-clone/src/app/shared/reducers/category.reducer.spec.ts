import { initialState } from "@models/category.model";
import { categoryReducer } from "./category.reducer";

describe("Category Reducer", () => {
  describe("an unknown action", () => {
    it("should return the previous state", () => {
      const action = {} as any;

      const result = categoryReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
