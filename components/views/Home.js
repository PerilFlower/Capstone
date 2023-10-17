import html from "html-literal";

export default state => html`
  <div id="labels">
    <h1>TRENDING</h1>
    <h1>LIBRARY</h1>
  </div>
  <h3>
    The weather in ${state.weather.city} is ${state.weather.description}.
    Temperature is ${state.weather.temp}F, and it feels like
    ${state.weather.feelsLike}F.
  </h3>
`;
