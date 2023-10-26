import html from "html-literal";

export default state => html`
  <div id="labels">
    <h1>TRENDING</h1>
  </div>
  <div id="weather">
    <h3>
      The weather in ${state.weather.city} is ${state.weather.description}.
      Temperature is ${state.weather.temp}F, and it feels like
      ${state.weather.feelsLike}F.
    </h3>
  </div>
`;
