import { getInfo } from "./nasaData.js";

const buildHTML = () => {
  getInfo().then(picture => {
  let imgageCardHTML = document.querySelector(".imageContainer")
  imgageCardHTML.innerHTML += `<h3>${picture.title}</h3>
  <p>${picture.date}</p>
  <div class="nasaImage">
    <img src="${picture.hdurl}" alt="a picture in space from NASA" class="image">
  </div>
  <p>${picture.explanation}</p>`
   })
}

buildHTML()