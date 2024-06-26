export interface Note {
  id: string;
  title: string;
  content: string;
  htmlText: string;
  tags: string[];
  updatedAt: string;
  isDeleted: boolean;
}

export type State = {
  notes: Note[];
  selectedNote: Note | null;
};

export const initialState: State = {
  notes: [],
  selectedNote: null,
};
