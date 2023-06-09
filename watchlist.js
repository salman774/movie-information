let watchlistContainer = document.getElementById("watchlist-container");
let leadsfromlocalstorage = JSON.parse(localStorage.getItem("myData"));
let showmewishlist = () => {
  console.log(leadsfromlocalstorage);
  leadsfromlocalstorage.forEach((data) => {
    let str = "";
    str += `<div class="watchlist">
            <div class="render-movie-deail-container">
            <img class="poster" src="${data.Poster}" alt="" srcset="">
          <div/>
        <div class="after-image">
        <div class="name-star">
        <h3>${data.Title} 
        <i class="fa-solid fa-star"></i>
        <span>${data.imdbRating}</span>
       </h3> 
  </div>
  <div class="time-dramma-watchlist">
    <p>${data.Runtime}</p>
    <p>${data.Genre}</p>
  </div>
  <div class="plot">
    <p>${data.Plot}</p>
  </div>
  </div>
  <div>
  <hr>
</div>
</div>
`;
    watchlistContainer.innerHTML += str;
  });
};
showmewishlist();
