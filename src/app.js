const express = require("express");
const path = require("path");
const hbs = require("hbs");
const forecast = require("./utils/forecast");
//Initializing express
const app = express();
//Port on which we want to run our server
const PORT = process.env.PORT || 3001;

console.log(__dirname); //directory name

const pathToPublic = path.join(__dirname, "../public");
const viewPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");
console.log(pathToPublic);

app.use(express.static(pathToPublic)); //For displaying static pages

// for displaying dynamic pages using handlebars
//Your views should be kept in 'views' folder of the directory, if not then set the path of the views as done @2
//Partials are used for reusing the components
app.set("view engine", "hbs");
app.set("views", viewPath); //(2)
hbs.registerPartials(partialsPath);

//Initialising routes (More like a switch case)
app.get("", (request, response) => {
  response.render("index", {
    //render is used for rendering views and sending them values dynamically
    title: "Weather",
    name: "Nakul Bageja"
  });
});

app.get("/about", (request, response) => {
  response.render("about", {
    title: "About Me",
    name: "Nakul Bageja"
  });
});
app.get("/help", (request, response) => {
  response.render("help", {
    title: "Help",
    name: "Nakul Bageja"
  });
});
app.get("/weather", (request, response) => {
  if (!request.query.address) {
    return response.send({
      error: "Please provide an address"
    });
  }

  forecast(
    request.query.address,
    (error, { temperature, humidity, feelsLike, location } = {}) => {
      if (error) {
        return response.send({
          error: error
        });
      }
      response.send({
        temperature,
        humidity,
        feelsLike,
        location
      });
    }
  );
});

app.get("/help/*", (request, response) => {
  response.render("404", {
    title: "404",
    message: "Help article not found",
    name: "Nakul Bageja"
  });
});

app.get("*", (request, response) => {
  response.render("404", {
    title: "404",
    message: "Page not found",
    name: "Nakul Bageja"
  });
});

//Running the server on port 300
app.listen(PORT, () => {
  console.log("Running on port " + PORT);
});
