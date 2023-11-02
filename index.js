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
  afterRender(state);
  router.updatePageLinks();
}

function afterRender(state) {
  // add menu toggle to bars icon in nav bar
  document.querySelector(".fa-bars").addEventListener("click", () => {
    document.querySelector("nav > ul").classList.toggle("hidden--mobile");
  });

  if (state.view === "Contact") {
    document.getElementById("contactform").addEventListener("submit", event => {
      event.preventDefault();

      const inputList = event.target.elements;

      const requestData = {
        name: inputList.name.value,
        phone: inputList.phone.value,
        email: inputList.email.value,
        msg: inputList.msg.value
      };
      // Log the request body to the console
      console.log("request Body", requestData);

      axios
        // Make a POST request to the API to create a new pizza
        .post(`${process.env.API_URL}/contacts`, requestData)
        .then(response => {
          //  Then push the new pizza onto the Pizza state pizzas attribute, so it can be displayed in the pizza list
          // store.Contact.contacts.push(response.data);
          router.navigate("/Contact");
        })
        // If there is an error log it to the console
        .catch(error => {
          console.log("It puked", error);
        });
    });
  }
}

router.hooks({
  before: (done, params) => {
    const view =
      params && params.data && params.data.view
        ? capitalize(params.data.view)
        : "Home";

    //Add a switch case statement to handle multiple routes
    switch (view) {
      case "Library":
        axios
          .get(
            `https://newsapi.org/v2/everything?q=astronomy&from=2023-10-27&language=en&sortBy=popularity&apiKey=${process.env.NEWS_API_KEY}`
          )
          .then(response => {
            console.log(response.data);
            store.Library.news = response.data.articles;
            done();
          })
          .catch(err => {
            console.log(err);
            done();
          });
        break;
      case "Home": {
        const startDate = new Date().toISOString().split("T")[0];
        const neoRequest = axios.get(
          `https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${startDate}&api_key=${process.env.NASA_API_KEY}`
        );
        const apodRequest = axios.get(
          `https://api.nasa.gov/planetary/apod?date=${startDate}&api_key=${process.env.NASA_API_KEY}`
        );

        Promise.allSettled([neoRequest, apodRequest])
          .then(responses => {
            const [neoResponse, apodResponse] = responses;

            store.Home.objects =
              neoResponse.value.data.near_earth_objects[startDate];
            store.Home.apod = apodResponse.value.data;
            console.log(store.Home);
            done();
          })
          .catch(err => {
            console.log(err);
            done();
          });
        break;
      }
      default:
        done();
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
