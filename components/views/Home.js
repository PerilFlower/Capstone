import html from "html-literal";

export default state => html`
  <div id="labels">
    <h1>WELCOME</h1>
    <h2>Picture of the day!</h2>
  </div>
  <div class="photoContainer">
    <div class="articleTitle">${state.apod.title}</div>
    <div class="articleBody">${state.apod.date}</div>
    <div class="articleBody"><img src="${state.apod.url}" /></div>
  </div>
  <div id="labels">
    <h2>Nearest objects to earth!</h2>
  </div>
  <div class="objectContainer">
    ${state.objects
      .map(asteroid => {
        return html`
          <div class="articleTitle">${asteroid.name}</div>
          <div class="articleBody">
            ${asteroid.close_approach_data[0].close_approach_date}
          </div>
        `;
      })
      .join("")}
  </div>
`;
