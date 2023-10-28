import html from "html-literal";

export default state => html`
  <div id="labels">
    <h1>Library</h1>
  </div>
  <div id="smalllabel">
    <h6>click below to see all of our articles!</h6>
    <div class="articleContainer">
    ${state.news
      .map(story => {
        return html`
          <div class="articleTitle">${story.title}</div>
          <div class="articleBody">${story.content}</div>
        `;
      })
      .join("")}
      This is the Library page
      <h1></h1>
    </h1>
  </div>
`;
