import html from "html-literal";
import * as views from "./views";

export default state => html`
  ${views["Home"]()}, ${views["Activities"]()}, ${views["Profile"]()},
  ${views["Contact"]()}, ${views["Library"]()}
`;
/* <div class="container">
<div id="sidebar_menu">
<div class="inner_sidebar_menu">
<ul>
    <a href="#">
      <img src="https://static.vecteezy.com/system/resources/previews/009/342/733/original/planet-clipart-design-illustration-free-png.png"
      height = "75px"
      width = "75px"
      />
      <span class="icon"></span>
      <span class="list">Home</span>
    </a>
    <a href="#">
      <img src="https://static.vecteezy.com/system/resources/previews/009/342/330/original/planet-clipart-design-illustration-free-png.png"
      height = "75px"
      width =
      />
      <span class="icon"></span>
      <span class="list">Library</span>
    </a>

    <a href="#">
      <img src="https://static.vecteezy.com/system/resources/previews/009/380/774/original/planet-clipart-design-illustration-free-png.png"
      height = "75px"
      width = "75px"
      />
      <span class="icon"></span>
      <span class="list">Activities</span>
    </a> */
