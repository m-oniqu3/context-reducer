import { ActionTypes } from "../actions";
import { useAppContext } from "../context/useAppContext";
import { LikeIcon, LikeIconSolid } from "../icons";
import { type Character } from "../types";

type Props = {
  character: Character;
};

function Character({ character }: Props) {
  const { dispatch } = useAppContext();

  function handleLike() {
    if (!character.isLiked) {
      dispatch({ type: ActionTypes.LIKE_CHARACTER, payload: character.id });
    } else {
      dispatch({ type: ActionTypes.DISLIKE_CHARACTER, payload: character.id });
    }
  }

  return (
    <li className="character">
      <figure>
        <img src={character.image} alt={character.name} />
      </figure>

      <div className="details">
        <h4 className="name">{character.name}</h4>
        <p className="species">{character.species}</p>

        <span className="like-icon" onClick={handleLike}>
          {character.isLiked ? <LikeIconSolid /> : <LikeIcon />}
        </span>
      </div>
    </li>
  );
}

export default Character;
