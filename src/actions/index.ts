import { Character } from "../types";

// Define action types as an enum to ensure consistency and prevent typos
export enum ActionTypes {
  SET_CHARACTERS = "SET_CHARACTERS",
  LIKE_CHARACTER = "LIKE_CHARACTER",
  DISLIKE_CHARACTER = "DISLIKE_CHARACTER",
}

// Define type for each action type to enforce type safety
export type SetCharactersAction = {
  type: ActionTypes.SET_CHARACTERS;
  payload: Character[];
};

export type LikeCharacterAction = {
  type: ActionTypes.LIKE_CHARACTER;
  payload: number;
};

export type DislikeCharacterAction = {
  type: ActionTypes.DISLIKE_CHARACTER;
  payload: number;
};

// Define a union type Actions to represent all possible action types
export type Actions =
  | SetCharactersAction
  | LikeCharacterAction
  | DislikeCharacterAction;
