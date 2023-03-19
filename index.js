import { rendermovie } from "./utils.js";
import { clicked } from "./watchlist.js";

let renderMovie = document.getElementById("render-movie-here");
let inputmovie = document.getElementById("input-movie");

let callapi = () => {
  let moviename = inputmovie.value;
  fetch(`http://www.omdbapi.com/?t=${moviename}&apikey=a62163d`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      rendermovie(data);
      if (
        document
          .getElementById("wishlist-button")
          .addEventListener("click", () => {
            clicked(data);
          })
      ) {
      }
    });
};

document.getElementById("search-button").addEventListener("click", callapi);

export { renderMovie, inputmovie };
