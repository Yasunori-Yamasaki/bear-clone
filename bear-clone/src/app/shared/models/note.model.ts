import { LocalStorageService } from "../services/local-storage.service";

export interface Note {
  id: string;
  title: string;
  content: string;
  htmlText: string;
  tags: string[];
  updatedAt: string;
  isDeleted: boolean;
}

export const initialState = [];
