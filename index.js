var express = require("express");
var app = express();
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./views");

var breakfastController = require("./controller/breakfast");
var data = require("./models/breakfast");

var lunchController = require("./controller/lunch");
var data1 = require("./models/lunch");

var dinnerController = require("./controller/dinner");
var data2 = require("./models/dinner");

var newsController = require("./controller/news");
var data3 = require("./models/news");

var dessertController = require("./controller/dessert");
var data4 = require("./models/dessert");

var beverageController = require("./controller/beverage");
var data5 = require("./models/beverage");

app.listen(4000);

app.get("/", function(request, response)  {
  var listBreakfast = breakfastController.getAll();
  var listLunch = lunchController.getAll();
  var listDinner = dinnerController.getAll();
  var listDessert = dessertController.getAll();
  var listBeverage = beverageController.getAll();
  var listNews = newsController.getAll();
  response.render("home", {
    listBreakfast: listBreakfast,
    listLunch: listLunch,
    listDinner: listDinner,
    listNews: listNews,
    listDessert: listDessert,
    listBeverage: listBeverage
  });
});

app.get("/home", function(request, response)  {
  var listBreakfast = breakfastController.getAll();
  var listLunch = lunchController.getAll();
  var listDinner = dinnerController.getAll();
  var listDessert = dessertController.getAll();
  var listBeverage = beverageController.getAll();
  var listNews = newsController.getAll();
  response.render("home", {
    listBreakfast: listBreakfast,
    listLunch: listLunch,
    listDinner: listDinner,
    listNews: listNews,
    listDessert: listDessert,
    listBeverage: listBeverage
  });
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
  var listBreakfast = breakfastController.getAll();
  var listLunch = lunchController.getAll();
  var listDinner = dinnerController.getAll();
  var listDessert = dessertController.getAll();
  var listBeverage = beverageController.getAll();
  response.render("meals", {
    listBreakfast: listBreakfast,
    listLunch: listLunch,
    listDinner: listDinner,
    listDessert: listDessert,
    listBeverage: listBeverage
  });
});


app.get("/recipe", function (request, response) {
var listBreakfast = breakfastController.getAll();
response.render("recipeofthemonth");
});

app.get("/booking", function (request, response) {
response.render("booking");
});
