import html from "html-literal";

export default state => html`
  <div id="labels">
    <h1>WELCOME</h1>
    <h2>Picture of the day!</h2>
  </div>
  <div class="photoContainer">
    ${state.apoid
      .map(picture => {
        return html`
          <div class="articleTitle">${picture.name}</div>
          <div class="articleBody">${picture.date}</div>
          <div class="articleBody">${picture.url}</div>
        `;
      })
      .join("")}
  </div>
  <div id="labels">
    <h2>Nearest objects to earth!</h2>
  </div>
  <div class="objectContainer">
    ${state.objects
      .map(asteroid => {
        return html`
          <div class="articleTitle">${asteroid.name}</div>
          <div class="articleBody">${asteroid.close_approach_date}</div>
        `;
      })
      .join("")}
  </div>
`;
