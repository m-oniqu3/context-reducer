import { Character } from "../types";

export async function fetchCharacters() {
  const url = "https://finalspaceapi.com/api/v0/character/?limit=15";

  try {
    const response = await fetch(url);
    const data = await response.json();

    const characters = data.map((character: Character) => {
      return {
        id: character.id,
        name: character.name,
        species: character.species,
        img_url: character.img_url,
      };
    });

    return characters;
  } catch (error) {
    console.log(error);
  }
}
