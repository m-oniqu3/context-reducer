import { useAppContext } from "../context/useAppContext";
import Character from "./Character";

function CharacterList() {
  const { state } = useAppContext();

  const characters = state.characters.map((character) => {
    return <Character key={character.id} character={character} />;
  });

  return <ul className="list">{characters}</ul>;
}

export default CharacterList;
