var express = require("express");
var app = express();
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./views");


app.listen(5000);


app.get("/", function (request, response) {
  response.render("home");
});


app.get("/about", function (request, response) {
  response.render("aboutus");
});


app.get("/awards", function (request, response) {
  response.render("awards");
});


app.get("/catering", function (request, response) {
  response.render("catering");
});


app.get("/contact", function (request, response) {
  response.render("contact");
});


app.get("/feedback", function (request, response) {
  response.render("feedback");
});


app.get("/foodtypes", function (request, response) {
  response.render("foodtypes");
});


app.get("/gallery", function (request, response) {
  response.render("gallery");
});


app.get("/meals", function (request, response) {
  response.render("meals");
});


app.get("/recipe", function (request, response) {
response.render("recipeofthemonth");
});
