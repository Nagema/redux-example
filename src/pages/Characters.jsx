import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const Characters = () => {
  const dispatch = useDispatch();
  const { characters, isLoading, error } = useSelector(
    (state) => state.characters
  );

  useEffect(() => {
    const getCharacters = () => async (dispatch) => {
      dispatch({ type: "gettingCharacters" });
      try {
        const result = await axios.get(
          "https://rickandmortyapi.com/api/character"
        );
        dispatch({ type: "getCharacters", payload: result.data.results });
      } catch (error) {
        dispatch({ type: "errorCharacters", payload: error.message });
      }
    };
    dispatch(getCharacters());
  }, []);
  return (
    <div>
      <div>{isLoading ? "esta cargando" : "here are the characters"}</div>
      {characters.map((character) => {
        return (
          <div key={character.id}>
            <p>{character.name}</p>
            <img src={character.image} alt={character.name} />
          </div>
        );
      })}
    </div>
  );
};

export default Characters;
