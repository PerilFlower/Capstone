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

// case "Space":
//   // New Axios get request utilizing already made environment variable
//   axios
//     .get(`process.env.NASA_OBJECTS_API_KEY/space`)
//     .then(response => {
//       // We need to store the response to the state, in the next step but in the meantime let's see what it looks like so that we know what to store from the response.
//       console.log("response", response);
//       store.Home.space = response.data;
//       done();
//     })
//     .catch(error => {
//       console.log("It puked", error);
//       done();
//     });
//   break;
// default:
//   done();
// }
// },
//   already: params => {
//     const view =
//       params && params.data && params.data.view
//         ? capitalize(params.data.view)
//         : "Home";

//     render(store[view]);
//   }
// });
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
