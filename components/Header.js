import html from "html-literal";
import Image from "../assets/imgs/image_processing20200630-15563-1bd4c62 (1).png";
import Image2 from "../assets/imgs/image_processing20200630-15633-1k0j5nw.png";
export default state => html`
  <header>
    <div>
      <div class="top_navbar">
        <div id="logo">
          <img src="${Image}" height="100px" width="100px" />
        </div>
        <div class="profilephoto">
          <img src="${Image2}" height="70px" width="70px" />
          <div id="effect">
          <a href="Profile.js"></a>
          <button>Profile</button>
        </div>
      </div>
    </div>
  </header>
`;
