import html from "html-literal";

export default state => html`
  <div id="labels">
    <h1>Library</h1>
  </div>
  <div id="smalllabel">
    <h6>click below to see all of our articles!</h6>
</div>
    <div class="articleContainer">
    ${state.news
      .map(story => {
        return html`
          <div class="articleTitle">
            <a href="${story.url}">${story.title}</a>
          </div>
          <div class="articleBody">${story.description}</div>
        `;
      })
      .join("")}
      <h1></h1>
    </h1>
  </div>
`;
