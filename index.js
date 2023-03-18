import { unabletofind } from "./utils.js";
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
    });
};

document.getElementById("search-button").addEventListener("click", callapi);

const rendermovie = (movie) => {
  let str = "";
  str += ` <div>
  <div class="name-star">
    <h3>${movie.Title} 
     <i class="fa-solid fa-star"></i>
   <span>${movie.imdbRating}</span>
    </h3>
    
  </div>
  <div class="time-dramma-watchlist">
    <p>${movie.Runtime}</p>
    <p>${movie.Genre}</p>
    <div>
    <button id="wishlist-button">+</button>
    <span>watchlist</span>
    </div>
  </div>
  <div class="plot">
    <p>${movie.Plot}</p>
  </div>
  <div>
<img class="poster" src="${movie.Poster}" alt="" srcset="">
  <div/>

</div>
<hr>`;
  inputmovie.value = "";
  renderMovie.innerHTML = str;
  document.getElementById("wishlist-button").addEventListener("click", clicked);
  if (movie.Title === undefined) {
    unabletofind();
  }
};

export { renderMovie };

// if (
//     document
//       .getElementById("wishlist-button")
//       .addEventListener("click", clicked)
//   ) {
//   }
// };
// let clicked = () => {
//   console.log("button-pressed");
// };
