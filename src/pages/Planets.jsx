import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const Planets = () => {
  const dispatch = useDispatch();
  const { planets, isLoading, error } = useSelector((state) => state.planets);

  useEffect(() => {
    const getPlanets = () => async (dispatch) => {
      dispatch({ type: "gettingPlanets" });
      try {
        const result = await axios.get(
          "https://rickandmortyapi.com/api/location"
        );
        dispatch({ type: "getPlanets", payload: result.data.results });
      } catch (error) {
        dispatch({ type: "errorPlanets", payload: error.message });
      }
    };
    dispatch(getPlanets());
  }, []);

  return (
    <div>
      <p>{isLoading ? "loading" : "Here are the planets"}</p>
      {planets.map((planet) => {
        return (
          <div key={planet.id}>
            <p>{planet.name}</p>
            <p>{planet.dimension}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Planets;
