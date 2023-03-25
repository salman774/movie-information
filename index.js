import {
  pushDataToArray,
  rendermoviedetailhtml,
  unabletofind,
} from "./utils.js";
let renderMovie = document.getElementById("render-movie-here");
let inputmovie = document.getElementById("input-movie");
let leadsfromlocalstorage = JSON.parse(localStorage.getItem("myData"));
let arrayofmovie = [];

let callapi = () => {
  let moviename = inputmovie.value;
  fetch(`http://www.omdbapi.com/?t=${moviename}&apikey=a62163d`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      if (data.Title === undefined) {
        unabletofind();
      } else {
        rendermoviedetailhtml(data);

        document
          .getElementById("wishlist-button")
          .addEventListener("click", () => {
            pushDataToArray(data);
          });
      }
    });
};

if (leadsfromlocalstorage) {
  arrayofmovie = leadsfromlocalstorage;
  document.getElementById("search-button").addEventListener("click", callapi);
}

// document.getElementById("wishlist").addEventListener("click", function () {
//   showmewishlist();
// });
document.getElementById("search-button").addEventListener("click", callapi);

export { renderMovie, inputmovie, arrayofmovie };
