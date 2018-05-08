let express = require("express");
let bodyParser = require("body-parser");
let path = require("path");

module.exports = app => {
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./../public/home.html"));
  });
  app.get("/survey", (req, res) => {
    res.sendFile(path.join(__dirname, "./../public/survey.html"));
  });
  app.get("/style.css", (req, res) => {
    res.sendFile(path.join(__dirname, "./../public/style.css"));
  });
  app.get("/main.js", (req, res) => {
    res.sendFile(path.join(__dirname, "./../public/main.js"));
  });
};
