import html from "html-literal";

export default state => html`
  <div id="labels">
    <h1>TRENDING</h1>
    <h2>Articles</h2>
    <h2>Activities</h2>
  </div>
  <div>
      <h3>
        <div class="articleContainer">
          <div class="articleTitle">${state.article.author}</div>
          <div class="articleBody"> ${state.article.content}</div>
          </h3>
        </div>
    </div>
  </div>
`;
