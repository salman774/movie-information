import { renderMovie, inputmovie } from "./index.js";

let unabletofind = () => {
  {
    let str = "";
    str = `<div class="not-in-database">
  <p>"I'm sorry, but we were unable to find the movie you were searching for in our database. Please ensure that you have spelled the title correctly and used the proper name." </p>
  </div>`;
    renderMovie.innerHTML = str;
  }
};

const rendermoviedetailhtml = (movie) => {
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

  if (movie.Title === undefined) {
    unabletofind();
  }
};

export { unabletofind, rendermoviedetailhtml };
