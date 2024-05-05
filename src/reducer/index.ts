import { ActionTypes, Actions } from "../actions";
import { Character } from "../types";

export type State = {
  characters: Character[];
  likedCharacters: Character[];
};

export const initialState: State = {
  characters: [],
  likedCharacters: [],
};

export function reducer(state: State, action: Actions) {
  switch (action.type) {
    case ActionTypes.SET_CHARACTERS:
      return {
        ...state,
        characters: action.payload,
      };

    case ActionTypes.LIKE_CHARACTER:
      return state;

    case ActionTypes.DISLIKE_CHARACTER:
      return state;

    default:
      return state;
  }
}
