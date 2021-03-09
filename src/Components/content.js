import React from "react";
import { UserContext } from "../App";
import MainBG from "../img/mainBground.jpeg";
function content() {
  return (
    <UserContext.Consumer>
      {(contextState) => {
        console.log(contextState.contentState.noData);
        return (
          <div
            className="d-flex flex-wrap justify-content-around"
            style={{
              backgroundImage: `url(${MainBG})`,
              backgroundRepeat: "repeat-y",
              backgroundSize: "100% 300vh",
              padding: "40px 0",
              height: "600vh",
            }}
          >
            {contextState.contentState.cocktailData.map((cocktail) => {
              if (contextState.contentState.loaded) {
                return (
                  <div
                    key={cocktail.idDrink}
                    className="mx-4 my-3 px-3"
                    style={{
                      border: "1px solid orange",
                      borderRadius: "15px",
                      width: "40%",
                      color: "white",
                      textShadow: "2px 2px black",
                    }}
                  >
                    <h3>Name: {cocktail.strDrink}</h3>
                    <img
                      src={cocktail.strDrinkThumb}
                      className="w-25 my-2"
                      style={{ borderRadius: "15px" }}
                    ></img>
                    <div>
                      <p>Glass type: {cocktail.strGlass}</p>
                      <p>
                        <b>Preparation[En]:</b> {cocktail.strInstructions}
                      </p>
                      <p>
                        <b>Preparation[De]:</b> {cocktail.strInstructionsDE}
                      </p>
                      <ul
                        style={{
                          listStyleType: "none",
                          width: "100%",
                          textAlign: "left",
                        }}
                      >
                        <h4>Ingredients:</h4>
                        <li>
                          {cocktail.strMeasure1} {cocktail.strIngredient1}
                        </li>
                        <li>
                          {cocktail.strMeasure2} {cocktail.strIngredient2}
                        </li>
                        <li>
                          {cocktail.strMeasure3} {cocktail.strIngredient3}
                        </li>
                        <li>
                          {cocktail.strMeasure4} {cocktail.strIngredient4}
                        </li>
                        <li>
                          {cocktail.strMeasure5} {cocktail.strIngredient5}
                        </li>
                        <li>
                          {cocktail.strMeasure6} {cocktail.strIngredient6}
                        </li>
                      </ul>
                      {cocktail.strVideo ? (
                        <p>
                          <a href={cocktail.strVideo}>Preparation Video</a>
                        </p>
                      ) : null}
                    </div>
                  </div>
                );
              }
            })}
          </div>
        );
      }}
    </UserContext.Consumer>
  );
}

export default content;
