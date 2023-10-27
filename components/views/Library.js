import html from "html-literal";

export default state => html`
  <div id="labels">
    <h1>Library</h1>
  </div>
  <div id="smalllabel">
    <h6>click below to see all of our articles!</h6>
  </div>
  <div class="articleContainer">
    <div class="articleTitle">Title and author</div>
    <div class="articleBody">text</div>
    <h1>
      This is the Library page
      <h1></h1>
    </h1>
  </div>
`;
