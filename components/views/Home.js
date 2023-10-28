import html from "html-literal";

export default state => html`
  <div id="labels">
    <h1>TRENDING</h1>
    <h2>Articles</h2>
    <h2>Activities</h2>
  </div>
  <div class="articleContainer">
    ${state.news
      .map(story => {
        return html`
          <div class="articleTitle">${story.title}</div>
          <div class="articleBody">${story.content}</div>
        `;
      })
      .join("")}
    </h3>
  </div>
`;
