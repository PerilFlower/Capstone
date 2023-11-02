// 'Import' the Express module instead of http
import express, { response } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import contacts from "./routers/contacts.js";
import axios from "axios";
// import pizzas from "./routers/pizzas.js";
// Initialize the Express application
const app = express();

// Load environment variables from .env file
dotenv.config();

mongoose.connect(process.env.MONGODB, {
  // Configuration options to remove deprecation warnings, just include them to remove clutter
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Connection Error:"));
db.once(
  "open",
  console.log.bind(console, "Successfully opened connection to Mongo!")
);

const PORT = process.env.PORT || 4040;

const logging = (request, response, next) => {
  console.log(
    `${request.method} ${request.url} ${new Date().toLocaleString("en-us")}`
  );

  next();
};

// CORS Middleware
const cors = (req, res, next) => {
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type, Accept,Authorization,Origin"
  );
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
};

app.use(cors);
app.use(express.json());
app.use(logging);

// Handle the request with HTTP GET method from http://localhost:4040/status
app.get("/status", (request, response) => {
  // Create the headers for response by default 200
  // Create the response body
  // End and return the response
  // Old version of Service Healthy
  // response.send(JSON.stringify({ message: "Service is healthy" }));

  // New version of Service Healthy
  response.status(200).json({ message: "Service Healthy" });
});

app.get("/news", (request, response) => {
  axios
    .get(
      `https://newsapi.org/v2/everything?q=astronomy&from=2023-10-27&language=en&sortBy=popularity&apiKey=${process.env.NEWS_API_KEY}`
    )
    .then(newsdata => {
      console.log(newsdata.data);
      response.json(newsdata.data.articles);
    })
    .catch(err => {
      console.log(err);
    });
});

app.use("/contacts", contacts);

// Tell the Express app to start listening
// Let the humans know I am running and listening on 4040
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
