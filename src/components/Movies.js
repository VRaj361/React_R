import React from "react";
import { Link } from "react-router-dom";

import { MoviesDetail } from "./MoviesDetail";

export const Movies = () => {
  var detail = [
    { id: "11111", price: 300, movieName: "Pushpa", rating: 1 },
    { id: "13211", price: 100, movieName: "Kashmir file", rating: 4 },
    { id: "13412", price: 200, movieName: "Udta punjeb", rating: 1 },
  ];
  
  return (
    <div>
      <h1>Movies</h1>
      <table class="table">
        <thead>
          <tr>
              
            <th scope="col">id</th>
            <th scope="col">movieName</th>
            <th scope="col">price</th>
            <th scope="col">rating</th>
          </tr>
        </thead>
        <tbody>
          {detail.map((user) => {
              return (
                
                  <tr>
                <td >  <Link to={`/movies/moviesdetail/${user.id}`} >{user.id}</Link></td>
                <td>{user.movieName}</td>
                <td>{user.price}</td>
                <td>{user.rating}</td>
              </tr>
              
            );
          })}
          
        </tbody>
      </table>
    </div>
  );
  
};
export default Movies;

