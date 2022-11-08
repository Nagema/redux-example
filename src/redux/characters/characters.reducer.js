const INITIAL_STATE = {
  characters: [],
  isLoading: false,
  error: false,
};

const charactersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "gettingCharacters":
      return { ...state, isLoading: true };
    case "getCharacters":
      return {
        ...state,
        isLoading: false,
        characters: action.payload,
        error: false,
      };
    case "errorCharacters":
      return {
        ...state,
        isLoading: false,
        characters: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default charactersReducer;
