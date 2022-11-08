const INITIAL_STATE = {
  planets: [],
  isLoading: false,
  error: false,
};

const planetsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "gettingPlanets":
      return { ...state, isLoading: true };
    case "getPlanets":
      return { ...state, isLoading: false, planets: action.payload };
    case "errorPlanets":
      return {
        ...state,
        isLoading: false,
        planets: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default planetsReducer;
