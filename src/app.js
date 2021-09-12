const { NODE_ENV = "development" } = process.env;
const express = require("express");
const app = express();

// Build your routes here
const sayPong = (req, res, next) => {
  res.send("pong!")
};

app.get("/ping", sayPong);

const welcomeMsg = (req, res, next) => {
  res.send("Welcome to my server.")
};

app.get("/welcome", welcomeMsg);

module.exports = app;
