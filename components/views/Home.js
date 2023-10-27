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
          <div class="articleTitle">Title and author</div>
          <div class="articleBody">text</div>
        </div>
      </h3>
    </div>
  </div>
`;
