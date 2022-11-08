import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import charactersReducer from "./characters/characters.reducer";
import planetsReducer from "./planets/planets.reducer";

const rootReducer = combineReducers({
  characters: charactersReducer,
  planets: planetsReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
