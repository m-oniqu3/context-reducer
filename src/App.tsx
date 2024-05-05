import { useEffect } from "react";
import "./App.css";
import { ActionTypes } from "./actions";
import { useAppContext } from "./context/useAppContext";
import { Character } from "./types";
import { fetchCharacters } from "./utils/fetchCharacters";

function App() {
  const { state, dispatch } = useAppContext();

  useEffect(() => {
    fetchCharacters().then((characters: Character[]) => {
      dispatch({
        type: ActionTypes.SET_CHARACTERS,
        payload: characters,
      });
    });
  }, [dispatch]);

  return (
    <>
      <h3>How to use useContext & useReducer with TypeScript in React</h3>
      <p>{state.characters.length}</p>
    </>
  );
}

export default App;
