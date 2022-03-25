import React from "react";
import { useParams } from "react-router-dom";
import movies from "./Movies";

export const MoviesDetail = () => {
  let id = useParams().id;
  console.log(id)
  
  return (
    <div>
      <h1>Movie detail</h1>
        <h1>This is id to be clickec : {id}</h1>
    </div>
  );
};
