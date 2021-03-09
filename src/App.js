import React, { useEffect, useReducer } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

//! Components
import CocktailSearch from "./Components/cocktailSearch";
import Content from "./Components/content";

export const UserContext = React.createContext();

const initialState = {
  keyWord: "",
  cocktailData: [],
  loaded: false,
  noData: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "KEYWORD_UPDATED":
      return {
        ...state,
        keyWord: action.payload,
        loaded: true,
      };
    case "COCKTAIL_ASKED":
      return {
        ...state,
        cocktailData: action.payload,
        noData: false,
      };
    case "NO_COCKTAIL":
      return {
        ...state,
        cocktailData: action.payload,
        noData: true,
      };
    default:
      return state;
  }
};

function App() {
  const [myCocktailState, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${myCocktailState.keyWord}`
    )
      .then((response) => response.json())
      .then((response) => {
        if (response.drinks) {
          dispatch({
            type: "COCKTAIL_ASKED",
            payload: response.drinks,
          });
        } else {
          dispatch({
            type: "NO_COCKTAIL",
            payload: [],
          });
        }
      })
      .catch((error) => {
        console.log("Eroorrr");
        console.log(error);
      });
  }, [myCocktailState.keyWord]);
  return (
    <UserContext.Provider
      value={{ contentState: myCocktailState, contentDispatch: dispatch }}
    >
      <div className="App">
        <CocktailSearch></CocktailSearch>
        <Content></Content>
      </div>
    </UserContext.Provider>
  );
}

export default App;
