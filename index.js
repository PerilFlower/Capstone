import { Header, Nav, Footer, Main } from "./components";
import * as store from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";
import axios from "axios";

const router = new Navigo("/");

function render(state = store.Home) {
  document.querySelector("#root").innerHTML = `
  ${Header(state)}
  ${Nav(store.Links)}
  ${Main(state)}
  ${Footer()}
  `;
  afterRender();
  router.updatePageLinks();
}

function afterRender() {
  // add menu toggle to bars icon in nav bar
  document.querySelector(".fa-bars").addEventListener("click", () => {
    document.querySelector("nav > ul").classList.toggle("hidden--mobile");
  });
}

router.hooks({
  before: (done, params) => {
    const view =
      params && params.data && params.data.view
        ? capitalize(params.data.view)
        : "Home";

    const startDate = new Date();

    // Add a switch case statement to handle multiple routes
    switch (view) {
      case "Home":
        // axios
        //   .get(
        //     `https://newsapi.org/v2/everything?q=space&from=2023-10-27&sortBy=popularity&apiKey=${process.env.NEWS_API_KEY}`
        //   )
        //   .then(response => {
        //     console.log(response.data);
        //     store.Home.news = response.data.articles;
        //     done();
        //   })
        //   .catch(err => {
        //     console.log(err);
        //     done();
        //   });
        axios
          .get(
            `https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate.toISOString(
              "YYYY-MM-DD"
            )}&api_key=${process.env.NASA_OBJECTS_API_KEY}`
          )
          .then(response => {
            console.log(response.data);
            store.Home.objects = response.data.near_earth_objects;
            done();
          })
          .catch(err => {
            console.log(err);
            done();
          });
    }
  },
  already: params => {
    const view =
      params && params.data && params.data.view
        ? capitalize(params.data.view)
        : "Home";

    render(store[view]);
  }
});

router
  .on({
    "/": () => render(),
    ":view": params => {
      let view = capitalize(params.data.view);
      if (view in store) {
        render(store[view]);
      } else {
        render(store.Viewnotfound);
        console.log(`View ${view} not defined`);
      }
    }
  })
  .resolve();
