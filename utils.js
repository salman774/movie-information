import { renderMovie } from "./index.js";
let unabletofind = () => {
  {
    let str = "";
    str = `<div class="not-in-database">
  <p>"I'm sorry, but we were unable to find the movie you were searching for in our database. Please ensure that you have spelled the title correctly and used the proper name." </p>
  </div>`;
    renderMovie.innerHTML = str;
  }
};

export { unabletofind };
