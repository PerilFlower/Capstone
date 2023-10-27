import html from "html-literal";

export default state => html`
  <div id="labels">
    <h1>TRENDING</h1>
    <h2>Articles</h2>
    <h2>Activities</h2>
  </div>
  <div id="smalllabel">
    <h6>click below to see most popular activities and articles!</h6>
    <div id="weather">
      <h3>
        The weather in ${state.weather.city} is ${state.weather.description}.
        Temperature is ${state.weather.temp}F, and it feels like
        ${state.weather.feelsLike}F.
      </h3>
    </div>
  </div>
`;
