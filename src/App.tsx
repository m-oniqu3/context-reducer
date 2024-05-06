import { useEffect } from "react";

import { ActionTypes } from "./actions";
import CharacterList from "./components/CharacterList";
import { useAppContext } from "./context/useAppContext";
import { Character } from "./types";
import { fetchCharacters } from "./utils/fetchCharacters";

function App() {
  const { dispatch } = useAppContext();

  useEffect(() => {
    fetchCharacters()
      .then((characters: Character[]) => {
        dispatch({ type: ActionTypes.SET_CHARACTERS, payload: characters });
      })
      .catch((error) => {
        console.error("Failed to fetch characters:", error);
      });
  }, [dispatch]);

  return (
    <div className="container">
      <h3 className="text">
        How to use useContext & useReducer with TypeScript in React
      </h3>
      <p className="text">
        Heart the characters you love from the show Rick and Morty
      </p>
      <CharacterList />
    </div>
  );
}

export default App;
