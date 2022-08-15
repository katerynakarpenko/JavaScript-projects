let requestURL = "https://api.tvmaze.com/search/shows?q=animals";
const contentWrapper = document.querySelector(".teasers-wrapper");

function createTemplate(teaser) {
  return `
    <div class="teaser">
      <div class="teaser__image">
        <img src="${teaser.show.image ? teaser.show.image.medium : ""}" alt="" />
      </div>
      <div class="teaser__info"><span>Name:</span>${teaser.show.name}</div>
      <div class="teaser__info"><span>Score:</span>${teaser.score}</div>
      <div class="teaser__info"><span>Genres:</span>${teaser.show.genres}</div>
      <div class="teaser__info"><span>Language:</span>${teaser.show.language}</div>
      <div class="teaser__info"><span>Description:</span>${teaser.show.summary}</div>
    </div>
  `; 
}


fetch(requestURL)
  .then(response => response.json())
  .then(data => {
    if (data) {
      data.forEach(item => {
        contentWrapper.innerHTML += createTemplate(item);
      });
    }
  })