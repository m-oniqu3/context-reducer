import { Character } from "../types";

export async function fetchCharacters() {
  const url = 'https://rickandmortyapi.com/api/character/?page=1",';

  try {
    const response = await fetch(url);
    const data = await response.json();

    const characters = data.results.map((character: Character) => {
      return {
        id: character.id,
        name: character.name,
        species: character.species,
        image: character.image,
        isLiked: false,
      };
    });

    return characters;
  } catch (error) {
    console.error("Error fetching characters:", error);
    throw new Error("Failed to fetch characters");
  }
}
