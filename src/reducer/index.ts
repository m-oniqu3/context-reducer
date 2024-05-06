import { ActionTypes, Actions } from "../actions";
import { Character } from "../types";

export type State = {
  characters: Character[];
};

export const initialState: State = {
  characters: [],
};

export function reducer(state: State, action: Actions) {
  switch (action.type) {
    case ActionTypes.SET_CHARACTERS:
      // Return a new state with the characters array updated
      return {
        ...state,
        characters: action.payload,
      };

    case ActionTypes.LIKE_CHARACTER: {
      // Create a copy of the current state
      const stateCopy = { ...state };

      // Find the character to be liked
      const character = stateCopy.characters.find(
        (c) => c.id === action.payload
      );

      // Ensure the character exists
      if (!character) {
        throw new Error("Character not found. Cannot like character.");
      }

      // Mark the character as liked
      character.isLiked = true;

      // Return the updated state
      return stateCopy;
    }

    case ActionTypes.DISLIKE_CHARACTER: {
      // Map over the characters array to create a new array with updated characters
      const characters = state.characters.map((character) => {
        if (character.id === action.payload) {
          // Create a new object with updated properties for the target character
          return { ...character, isLiked: false };
        }
        // Return unchanged character for other IDs
        return character;
      });

      // Return the updated state with the new characters array
      return { ...state, characters };
    }

    default:
      return state;
  }
}
