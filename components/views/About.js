import html from "html-literal";
import Photo from "../../assets/imgs/Screenshot_20220219-012145~2 (2).png";
export default state => html`
  <div id="labels">
    <div class="aboutSection">
      <h1>About</h1>
      <h2>
        This application was created by
      </h2>
      <img src="${Photo}" height="100px" width="100px" />
      <div id="parasection">
        <p>
          Hello! my name is Jace Frey, this application was created during my
          August 2023 SavvyCoders 12 week Fullstack web development cohort. I
          wanted to make a site where any student or teacher can go to find a
          fun lesson or to learn something new. Often nowadays a
          subscription is required to have fun on a educational site.
          ProximaCentury will never ask you to subscribe to a service or ask for
          anything in return, only that you enjoy the application and its
          multiple uses. More things are going to be added to this application and it is not in its final state. If you find any issues or need to contact me don't hesitate to message me on my social medias or fill out my contact form available on the site.
        </p>
</div>
        <p></p>
      </div>
    </div>
  </div>
`;
