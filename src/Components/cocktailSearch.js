import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../App";
import CocktailBG from "../img/5cocktail.jpg";
function cocktailSearch() {
  const cocktailContext = useContext(UserContext);

  return (
    <div
      className="w-100 d-flex justify-content-center align-items-center flex-column"
      style={{
        backgroundImage: `url(${CocktailBG})`,
        backgroundPosition: "top",
        backgroundSize: "100% 600px",
        backgroundRepeat: "no-repeat",
        height: "550px",
        borderBottom: "4px solid orange",
        paddingBottom: "120px",
      }}
    >
      <h1 className="mb-5 text-white font-italic">Hello,My Lovely Ilke</h1>
      <input
        className="w-25 py-1 px-2"
        style={{
          border: "none",
          borderRadius: "15px",
          fontSize: "1.3rem",
        }}
        placeholder="Please Enter A Cocktail Name"
        onChange={(e) => {
          cocktailContext.contentDispatch({
            type: "KEYWORD_UPDATED",
            payload: e.target.value,
          });
        }}
      ></input>
    </div>
  );
}

export default cocktailSearch;
