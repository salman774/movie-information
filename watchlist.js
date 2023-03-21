import { arrayofmovie } from "./index.js";
let pushDataToArray = (data) => {
  arrayofmovie.push(data.Title);
  const jsonData = JSON.stringify(arrayofmovie);
  localStorage.setItem("myData", jsonData);
};

export { pushDataToArray };
